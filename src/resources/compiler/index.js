import javascriptGenerator from '../javascriptGenerator';

const start = `
if (!Scratch.extensions.unsandboxed) {
  alert("This extension needs to be unsandboxed to run!")
  return
}`

class Compiler {
    /**
     * Generates JavaScript code from the provided workspace & info.
     * @param {Blockly.Workspace} workspace 
     * @param {object} extensionMetadata 
     * @param {object} imageStates 
     * @returns {string} Generated code.
     */
    compile(workspace, extensionMetadata, imageStates) {
        const code = javascriptGenerator.workspaceToCode(workspace);

        const headerCode = [
            `/*`,
            `   This extension was made with TurboBuilder (Minified)!`,
            `   https://turbobuilder-steel.vercel.app/`,
            `*/`,
            `(async function (Scratch) {`,
            `const variables = {};`,
            `const blocks = [];`,
            `const menus = [];`,
            ``,
            start
        ];
        const classRegistry = {
            top: [
                `class Extension {`
            ],
            extensionInfo: {},
            bottom: [
                `}`
            ]
        }
        const footerCode = [
            `Scratch.extensions.register(new Extension());`,
            `})(Scratch);`
        ];

        if (imageStates) {
            if (imageStates.icon.image) {
                // add icon uri
                const url = imageStates.icon.image;
                classRegistry.extensionInfo.blockIconURI = url;
            }
            if (imageStates.menuicon.image) {
                // add icon uri
                const url = imageStates.menuicon.image;
                classRegistry.extensionInfo.menuIconURI = url;
            }
        }
        if (extensionMetadata) {
            classRegistry.extensionInfo.id = extensionMetadata.id;
            classRegistry.extensionInfo.name = extensionMetadata.name;
            if (extensionMetadata.docsURL) {
                classRegistry.extensionInfo.docsURI = extensionMetadata.docsURL;
            }
            if (extensionMetadata.color1) {
                classRegistry.extensionInfo.color1 = extensionMetadata.color1;
            }
            if (extensionMetadata.color2) {
                classRegistry.extensionInfo.color2 = extensionMetadata.color2;
            }
            if (extensionMetadata.color3) {
                classRegistry.extensionInfo.color3 = extensionMetadata.color3;
            }
            if (extensionMetadata.tbShow) {
                classRegistry.extensionInfo.tbShow = extensionMetadata.tbShow;
            }
        }

        return [].concat(headerCode, classRegistry.top, [
            `getInfo() {`,
            `return ${JSON.stringify(classRegistry.extensionInfo).substring(0, JSON.stringify(classRegistry.extensionInfo).length - 1) + ', "blocks": blocks }'}`,
            `}`,
        ], classRegistry.bottom, code, footerCode).join('\n');
    }
}

export default Compiler;
