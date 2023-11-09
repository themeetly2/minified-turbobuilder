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

        return [`(${X || 0} == ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
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

        return [`(${X || 0} === ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
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

        return [`(${X || 0} > ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x < y
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

        return [`(${X || 0} < ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x and y
    registerBlock(`${categoryPrefix}and`, {
        message0: '%1 and %2',
        args0: [
            {
                "type": "input_value",
                "name": "X",
                "check": "Boolean"
            },
            {
                "type": "input_value",
                "name": "Y",
                "check": "Boolean"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`(${X || false} && ${Y || false})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x or y
    registerBlock(`${categoryPrefix}or`, {
        message0: '%1 or %2',
        args0: [
            {
                "type": "input_value",
                "name": "X",
                "check": "Boolean"
            },
            {
                "type": "input_value",
                "name": "Y",
                "check": "Boolean"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`(${X || false} || ${Y || false})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // not x
    registerBlock(`${categoryPrefix}not`, {
        message0: 'not %1',
        args0: [
            {
                "type": "input_value",
                "name": "X",
                "check": "Boolean"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);

        return [`!${X || false}`, javascriptGenerator.ORDER_ATOMIC];
    })

    // join x y
    registerBlock(`${categoryPrefix}join`, {
        message0: 'join %1 %2',
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
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`\`(${String(X) || ''}\` + \`${String(Y) || ''}\`)`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x + y
    registerBlock(`${categoryPrefix}add`, {
        message0: '%1 + %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`(${X || 0} + ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x - y
    registerBlock(`${categoryPrefix}minus`, {
        message0: '%1 - %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`(${X || 0} - ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x * y
    registerBlock(`${categoryPrefix}multiply`, {
        message0: '%1 * %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`(${X || 0} * ${Y || 0})`, javascriptGenerator.ORDER_ATOMIC];
    })

    // x / y
    registerBlock(`${categoryPrefix}divide`, {
        message0: '%1 ÷ %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);

        return [`(${X || 0} / ${Y || 1})`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
