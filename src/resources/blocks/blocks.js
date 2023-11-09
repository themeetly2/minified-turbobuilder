import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';
import Blockly from 'blockly/core'

const categoryPrefix = 'blocks_';
const categoryColor = '#FF6680';

function register() {
    // create dem blocks!!!
    registerBlock(`${categoryPrefix}create`, {
        message0: 'create block %1 id: %2 text: %3 type: %4 inputs: %5 %6 function: %7 %8',
        args0: [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "ID",
                "value": "id",
                "spellcheck": false
            },
            {
                "type": "field_input",
                "name": "TEXT",
                "value": "text",
                "spellcheck": false
            },
            {
                "type": "field_dropdown",
                "name": "TYPE",
                "options": [
                    [ "block", "COMMAND" ],
                    [ "reporter", "REPORTER" ],
                    [ "boolean", "BOOLEAN" ],
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "INPUTS",
                "check": "BlockInput"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "FUNC"
            }
        ],
        nextStatement: null,
        inputsInline: false,
        colour: categoryColor,
    }, (block) => {
        const ID = block.getFieldValue('ID')
        const TEXT = block.getFieldValue('TEXT')
        const TYPE = block.getFieldValue('TYPE')
        const FUNC = javascriptGenerator.statementToCode(block, 'FUNC');
        
        const code = `blocks.push({
            opcode: \`${ID}\`,
            blockType: Scratch.BlockType.${TYPE},
            text: ${TEXT},
            arguments: {}
        })
        Extension.prototype[\`${ID}\`] = () => { ${FUNC} }`;
        return `${code}\n`;
    })

    // return
    registerBlock(`${categoryPrefix}return`, {
        message0: 'return %1',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE",
            }
        ],
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const code = `return ${VALUE || ''}`;
        return `${code}\n`;
    })
}
export default register;
