import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'events_';
const categoryColor = '#FFBF00';

function register() {
    // setInterval
    registerBlock(`${categoryPrefix}interval`, {
        message0: 'every %1 seconds do %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "TIME",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const TIME = javascriptGenerator.valueToCode(block, 'TIME', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `setInterval(() => { ${BLOCKS} }, (${TIME} * 1000));`;
        return `${code}\n`;
    })
}

export default register;
