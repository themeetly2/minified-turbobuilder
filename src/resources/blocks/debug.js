import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'debug_';
const categoryColor = '#666666';

function register() {
    // console.log
    registerBlock(`${categoryPrefix}log`, {
        message0: 'log %1',
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
        const LOG = javascriptGenerator.valueToCode(block, 'LOG', javascriptGenerator.ORDER_ATOMIC);
        const code = `console.log(${LOG});`;
        return `${code}\n`;
    })

    // console.warn
    registerBlock(`${categoryPrefix}warn`, {
        message0: 'warn %1',
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
        const LOG = javascriptGenerator.valueToCode(block, 'LOG', javascriptGenerator.ORDER_ATOMIC);
        const code = `console.warn(${LOG});`;
        return `${code}\n`;
    })

    // console.error
    registerBlock(`${categoryPrefix}error`, {
        message0: 'error %1',
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
        const LOG = javascriptGenerator.valueToCode(block, 'LOG', javascriptGenerator.ORDER_ATOMIC);
        const code = `console.error(${LOG});`;
        return `${code}\n`;
    })

    // raw block
    registerBlock(`${categoryPrefix}rawblock`, {
        message0: 'raw %1',
        args0: [
            {
                "type": "field_input",
                "name": "RAW",
                "spellcheck": false
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const RAW = block.getFieldValue('RAW')
        const code = `${RAW};`;
        return `${code}\n`;
    })

    // raw reporter
    registerBlock(`${categoryPrefix}raw`, {
        message0: 'raw %1',
        args0: [
            {
                "type": "field_input",
                "name": "RAW",
                "spellcheck": false
            }
        ],
        output: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const RAW = block.getFieldValue('RAW')
        return [RAW, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
