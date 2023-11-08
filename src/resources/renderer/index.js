import Blockly from "blockly/core"

class CustomConstantProvider extends Blockly.zelos.ConstantProvider {
    constructor() {
        super();

        this.SMALL_PADDING = 3
        this.MEDIUM_PADDING = 5
        this.MEDIUM_LARGE_PADDING = 7
        this.LARGE_PADDING = 8

        this.CORNER_RADIUS = 8

        this.STATEMENT_INPUT_SPACER_MIN_WIDTH = 120

        this.NOTCH_WIDTH = 15
        this.NOTCH_HEIGHT = 4

        this.FIELD_TEXT_FONTWEIGHT = 'bold';
        this.FIELD_TEXT_FONTFAMILY = '"Source Code Pro", monospace';
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