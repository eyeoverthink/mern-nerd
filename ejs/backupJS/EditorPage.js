// EditorPage.js

import theatre from './theatre.js';
import Button from './Button.js';
import LayoutManager from './LayoutManager.js';
import fetchTemplate from './templateLoader.js';

class EditorPage {
    constructor(props, components) {
        this.props = props;
        this.components = components;
        this.container = document.getElementById('app'); // Main container
    }

    async mount() {
        // Render the EJS template for the editor page
        this.container.innerHTML = await this.renderTemplate();
        this.initializeComponents();
    }

    async unmount() {
        // Clean up the editor page
        this.container.innerHTML = '';
    }

    async renderTemplate() {
        const template = await fetchTemplate('editorPage.ejs');
        return ejs.render(template, this.props);
    }

    initializeComponents() {
        // Initialize UI Components like Buttons, Sliders, etc.
        const saveButtonContainer = document.getElementById('save-buttons');
        const exportButton = new this.components.Button({
            text: 'Export Project',
            onClick: () => this.exportProject(),
            classes: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        });
        exportButton.mount(saveButtonContainer);

        const importButton = new this.components.Button({
            text: 'Import Project',
            onClick: () => this.importProject(),
            classes: 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        });
        importButton.mount(saveButtonContainer);

        // Initialize CodeMirror Editors
        this.initializeCodeEditors();

        // Initialize Style Controls
        this.initializeStyleControls();

        // Initialize Animation Controls
        this.initializeAnimationControls();
    }

    initializeCodeEditors() {
        // Assuming CodeMirror is globally available
        this.cssCode = CodeMirror.fromTextArea(document.getElementById("css-code"), {
            mode: "css",
            theme: "eclipse",
            lineNumbers: true,
            autoCloseBrackets: true,
            matchBrackets: true
        });

        this.htmlCode = CodeMirror.fromTextArea(document.getElementById("html-code"), {
            mode: "htmlmixed",
            theme: "eclipse",
            lineNumbers: true,
            autoCloseBrackets: true,
            matchBrackets: true
        });

        this.jsCode = CodeMirror.fromTextArea(document.getElementById("js-code"), {
            mode: "javascript",
            theme: "eclipse",
            lineNumbers: true,
            autoCloseBrackets: true,
            matchBrackets: true
        });

        // Load saved codes from localStorage
        const savedCSS = localStorage.getItem('cssCode') || '';
        const savedHTML = localStorage.getItem('htmlCode') || '';
        const savedJS = localStorage.getItem('jsCode') || '';

        this.cssCode.setValue(savedCSS);
        this.htmlCode.setValue(savedHTML);
        this.jsCode.setValue(savedJS);

        // Update preview on code changes
        [this.cssCode, this.htmlCode, this.jsCode].forEach(editor => {
            editor.on('change', () => {
                this.updatePreview();
                this.saveCodes();
            });
        });

        // Initial preview update
        this.updatePreview();
    }

    initializeStyleControls() {
        // Initialize style control components (color pickers, sliders, etc.)
        // Example: Color Picker
        const colorPicker = document.getElementById("color-picker");
        const applyColorButton = new this.components.Button({
            text: 'Apply Text Color',
            onClick: () => this.applyTextColor(colorPicker.value),
            classes: 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
        });
        applyColorButton.mount(document.getElementById('style-controls'));

        // Add more style controls similarly
    }

    initializeAnimationControls() {
        // Initialize animation controls
        const addAnimationButton = new this.components.Button({
            text: 'Add Animation',
            onClick: () => this.addAnimation(),
            classes: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        });
        addAnimationButton.mount(document.getElementById('animation-controls'));
    }

    updatePreview() {
        const css = this.cssCode.getValue();
        const html = this.htmlCode.getValue();
        const js = this.jsCode.getValue();

        const previewDocument = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <style>
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>
                    ${js}
                </script>
            </body>
            </html>
        `;

        const blob = new Blob([previewDocument], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;

        // Clean up the URL object after the iframe has loaded
        previewFrame.onload = function() {
            URL.revokeObjectURL(url);
        };
    }

    saveCodes() {
        localStorage.setItem('cssCode', this.cssCode.getValue());
        localStorage.setItem('htmlCode', this.htmlCode.getValue());
        localStorage.setItem('jsCode', this.jsCode.getValue());
        toastr.success("Changes saved successfully!");
    }

    applyTextColor(color) {
        const style = `color: ${color};`;
        this.cssCode.replaceRange(`\n${style}`, { line: this.cssCode.lineCount() }, { line: this.cssCode.lineCount() });
        this.updatePreview();
        this.saveCodes();
        toastr.success(`Applied Text Color: ${color}`);
    }

    addAnimation() {
        const animationName = prompt("Enter Animation Name:");
        if (!animationName) {
            toastr.warning("Animation name is required.");
            return;
        }

        const animationDuration = prompt("Enter Animation Duration (in seconds):", "2");
        const animationIteration = prompt("Enter Animation Iteration Count:", "infinite");
        const animationTiming = prompt("Enter Animation Timing Function:", "ease");

        if (!animationDuration || !animationIteration || !animationTiming) {
            toastr.warning("All animation fields are required.");
            return;
        }

        // Create keyframes
        const keyframes = `
@keyframes ${animationName} {
    from { opacity: 0; }
    to { opacity: 1; }
}
        `;
        this.cssCode.replaceRange(`\n${keyframes}`, { line: this.cssCode.lineCount() }, { line: this.cssCode.lineCount() });

        // Add animation property
        const animationProperty = `
animation: ${animationName} ${animationDuration}s ${animationTiming} ${animationIteration};
        `;
        this.cssCode.replaceRange(`\n${animationProperty}`, { line: this.cssCode.lineCount() }, { line: this.cssCode.lineCount() });

        this.updatePreview();
        this.saveCodes();
        toastr.success(`Added Animation: ${animationName}`);
    }

    exportProject() {
        const css = this.cssCode.getValue();
        const html = this.htmlCode.getValue();
        const js = this.jsCode.getValue();

        const combinedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fraymz - Exported Project</title>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
    <script>
        ${js}
    </script>
</body>
</html>
        `;

        const blob = new Blob([combinedHTML], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'exported_project.html';
        a.click();

        URL.revokeObjectURL(url);
        toastr.success("Project exported successfully!");
    }

    importProject() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'application/json';
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.css && data.html && data.js) {
                        this.cssCode.setValue(data.css);
                        this.htmlCode.setValue(data.html);
                        this.jsCode.setValue(data.js);
                        this.updatePreview();
                        this.saveCodes();
                        toastr.success("Project imported successfully!");
                    } else {
                        toastr.error("Invalid project file.");
                    }
                } catch (error) {
                    toastr.error("Failed to parse the project file.");
                }
            };
            reader.readAsText(file);
        };
        fileInput.click();
    }
}

export default EditorPage;