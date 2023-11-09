import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'operators_';
const categoryColor = '#59C059';

function register() {
    // x = y
    registerBlock(`${categoryPrefix}equals`, {
        message0: '%1 = %2',
        args0: [
            {
                "type": "input_value",
                "name": "X"
            },
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`${X || 0} == ${Y || 0}`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x === y
    registerBlock(`${categoryPrefix}strictequals`, {
        message0: '%1 === %2',
        args0: [
            {
                "type": "input_value",
                "name": "X"
            },
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`${X || 0} === ${Y || 0}`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x > y
    registerBlock(`${categoryPrefix}more`, {
        message0: '%1 > %2',
        args0: [
            {
                "type": "input_value",
                "name": "X",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "Y",
                "check": "Number"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`${X || 0} > ${Y || 0}`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x > y
    registerBlock(`${categoryPrefix}less`, {
        message0: '%1 < %2',
        args0: [
            {
                "type": "input_value",
                "name": "X",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "Y",
                "check": "Number"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`${X || 0} < ${Y || 0}`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
