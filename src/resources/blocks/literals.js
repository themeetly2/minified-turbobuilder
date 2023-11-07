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
        message0: ' %1 ',
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
        const NUMBER = javascriptGenerator.valueToCode(block, 'NUMBER', javascriptGenerator.ORDER_ATOMIC);

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
        const STRING = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);

        return ["'" + STRING + "'", javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
