import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';
import Blockly from 'blockly/core'

const categoryPrefix = 'sensing_';
const categoryColor = '#5CB1D6';

function register() {
    // when key pressed
    registerBlock(`${categoryPrefix}keypress`, {
        message0: 'when key %1 is pressed %2 %3',
        args0: [
            {
                "type": "field_input",
                "name": "KEY",
                "spellcheck": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor,
        extensions: [
          'single_character_validation',
        ],
    }, (block) => {
        const KEY = block.getFieldValue('KEY')
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `document.addEventListener("keypress", event => {
            if (event.key == '${KEY}') { ${BLOCKS} }
        });`;
        return `${code}\n`;
    })
}

Blockly.Extensions.register('single_character_validation', function() {
    this.getField('KEY').setValidator(function(newValue) {
        return newValue.substring(Math.max(newValue.length - 1, 0),newValue.length);
    });
});

export default register;
