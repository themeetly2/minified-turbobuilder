import Blockly from 'blockly/core';
import javascriptGenerator from '../javascriptGenerator';

export default (blockName, jsonData, compileFunction) => {
    for (const property in jsonData) {
        if (['previousStatement', 'nextStatement'].includes(property) && jsonData[property] === null) {
            jsonData[property] == 'Regular'
        }
    }

    const blockObject = {
        init: function () {
            this.jsonInit(jsonData);
        }
    };

    // register visual block
    Blockly.Blocks[blockName] = blockObject

    // register block compile function
    javascriptGenerator[blockName] = (block) => {
        //field safe thing
        let altFunc = a=>block.getField(a).getValue()
        block.getFieldValue = (name) => {
            let returns = altFunc(name)
            console.log("debug: ", returns)
            if (typeof(returns) == 'string') {
                returns.replace(/\\/g, "\\\\")
                returns.replace(/'/g, "\\'")
            }
            console.log("debug: ", returns)
            return returns
        }

        return compileFunction(block)
    };
}