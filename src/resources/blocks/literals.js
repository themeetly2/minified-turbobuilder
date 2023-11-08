import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'literals_';
const categoryColor = '#59C08E';

function register() {
    // true
    registerBlock(`${categoryPrefix}true`, {
        message0: 'true',
        args0: [],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`true`, javascriptGenerator.ORDER_ATOMIC];
    })

    // false
    registerBlock(`${categoryPrefix}false`, {
        message0: 'false',
        args0: [],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`false`, javascriptGenerator.ORDER_ATOMIC];
    })

    // number
    registerBlock(`${categoryPrefix}number`, {
        message0: '(%1)',
        args0: [
            {
                "type": "field_number",
                "name": "NUMBER",
                "value": 0,
            }
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const NUMBER = block.getFieldValue('NUMBER')

        return [NUMBER, javascriptGenerator.ORDER_ATOMIC];
    })

    // string
    registerBlock(`${categoryPrefix}string`, {
        message0: "'%1'",
        args0: [
            {
                "type": "field_input",
                "name": "STRING",
                "value": 0,
                "spellcheck": false
            }
        ],
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const STRING = block.getFieldValue('STRING')

        return ["'" + STRING + "'", javascriptGenerator.ORDER_ATOMIC];
    })

    // color
    registerBlock(`${categoryPrefix}color`, {
        message0: "%1",
        args0: [
            {
                "type": "field_colour",
                "name": "COLOR",
                "colour": "#ff0000"
            }
        ],
        output: "Color",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const COLOR = block.getFieldValue('COLOR')

        return ["'" + COLOR + "'", javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
