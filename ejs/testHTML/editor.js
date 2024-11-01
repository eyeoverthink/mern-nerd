document.addEventListener("DOMContentLoaded", function() {
    const cssInput = document.getElementById("css-input");
    const previewBox = document.getElementById("preview-box");
    const commandSuggestions = document.getElementById("command-suggestions");

    const styleMap = {
        "vs-text-slate-500": "color: #64748b;",
        "vs-bg-yellow-200": "background-color: #fef08a;",
        // Add more styles here as you define them
    };

    cssInput.addEventListener("input", function() {
        const command = cssInput.value;
        const style = styleMap[command];

        if (style) {
            previewBox.style = style;
            commandSuggestions.textContent = `Applied: ${command}`;
        } else {
            commandSuggestions.textContent = "Command not recognized";
        }
    });
});