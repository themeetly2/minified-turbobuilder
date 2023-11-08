import Blockly from "blockly/core"

class CustomConstantProvider extends Blockly.blockRendering.ConstantProvider {
    constructor() {
        super();

        SMALL_PADDING = 2
        MEDIUM_PADDING = 4
        MEDIUM_LARGE_PADDING = 6
        LARGE_PADDING = 8

        NOTCH_WIDTH = 12
        NOTCH_HEIGHT = 3
    }
}

export default class Renderer extends Blockly.zelos.Renderer {
    constructor() {
        super();
    }
    
    makeConstants_() {
        return new CustomConstantProvider();
    }
}