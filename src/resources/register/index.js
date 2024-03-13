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
        let getFieldValueOrigin = block.getFieldValue
        block.getFieldValue = (name) => {
            let returns = getFieldValueOrigin(name)
            if (typeof(returns) == 'string') {
                returns.replace(/\\/g, "\\\\")
                returns.replace(/\'/g, "\\'")
            }
            return returns
        }

        return compileFunction(block)
    };
}