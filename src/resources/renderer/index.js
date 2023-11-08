import Blockly from "blockly/core"

class CustomConstantProvider extends Blockly.zelos.ConstantProvider {
    constructor() {
        super();

        this.SMALL_PADDING = 2
        this.MEDIUM_PADDING = 4
        this.MEDIUM_LARGE_PADDING = 6
        this.LARGE_PADDING = 8

        this.NOTCH_WIDTH = 12
        this.NOTCH_HEIGHT = 3
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