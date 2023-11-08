import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'debug_';
const categoryColor = '#777777';

function register() {
    // if <> then {}
    registerBlock(`${categoryPrefix}log`, {
        message0: 'log $1',
        args0: [
            {
                "type": "input_value",
                "name": "LOG"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const LOG = block.getFieldValue('LOG')
        const code = `console.log(${LOG});`;
        return `${code}\n`;
    })
}

export default register;
