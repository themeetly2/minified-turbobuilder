import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'control_';
const categoryColor = '#FFAB19';

function register() {
    // if <> then {}
    registerBlock(`${categoryPrefix}ifthen`, {
        message0: 'if %1 then %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const CONDITION = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `if (${CONDITION ? `Boolean(${CONDITION})` : 'false'}) { ${BLOCKS} };`;
        return `${code}\n`;
    })

    // if <> then {} else {}
    registerBlock(`${categoryPrefix}ifthenelse`, {
        message0: 'if %1 then %2 %3 else %4 %5',
        args0: [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS2"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const CONDITION = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const BLOCKS2 = javascriptGenerator.statementToCode(block, 'BLOCKS2');
        const code = `if (${CONDITION ? `Boolean(${CONDITION})` : 'false'}) {
            ${BLOCKS}
        } else {
            ${BLOCKS2}
        };`;
        return `${code}\n`;
    })

    // if <> then () else ()
    registerBlock(`${categoryPrefix}ifthenreturn`, {
        message0: 'if %1 then %2 %3 else %4 %5',
        args0: [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "X",
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "Y",
            },
        ],
        output: null,
        inputsInline: false,
        colour: categoryColor
    }, (block) => {
        const CONDITION = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC);
        const X = javascriptGenerator.valueToCode(block, 'X', javascriptGenerator.ORDER_ATOMIC);
        const Y = javascriptGenerator.valueToCode(block, 'Y', javascriptGenerator.ORDER_ATOMIC);
        return [`(${CONDITION || false} ? (${X}) : (${Y}))`, javascriptGenerator.ORDER_ATOMIC];
    })

    // switch statement
    registerBlock(`${categoryPrefix}switch`, {
        message0: 'switch %1 %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS",
                "check": "Case"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `switch (${VALUE || "''"}) { ${BLOCKS} };`;
        return `${code}\n`;
    })

    // case
    registerBlock(`${categoryPrefix}case`, {
        message0: 'case %1 %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        previousStatement: "Case",
        nextStatement: "Case",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `case (${VALUE || "''"}): ${BLOCKS}`;
        return `${code}\n`;
    })

    // default
    registerBlock(`${categoryPrefix}default`, {
        message0: 'default %1 %2',
        args0: [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        previousStatement: "Case",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `default: ${BLOCKS}`;
        return `${code}\n`;
    })

    // break
    registerBlock(`${categoryPrefix}break`, {
        message0: 'break',
        args0: [],
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const code = `break;`;
        return `${code}\n`;
    })
}

export default register;
