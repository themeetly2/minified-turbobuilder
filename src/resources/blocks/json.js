import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'json_';
const categoryColor = '#FF661A';

function register() {
    // check if a string is json
    registerBlock(`${categoryPrefix}validate`, {
        message0: 'is %1 JSON?',
        args0: [
            {
                "type": "input_value",
                "name": "INPUT"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const INPUT = block.getFieldValue('INPUT')
        return [`() => { try { JSON.parse(${INPUT}); return true; } catch { return false; } }`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
