// Function to apply style to selected text
function applyStyleToSelection(command) {
    const style = styleMap[command];
    if (style) {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, styleMap[command].match(/color:\s*(#[0-9a-fA-F]{3,6});/)[1]);
        commandSuggestions.textContent = `Applied: ${command}`;
    } else {
        commandSuggestions.textContent = "Command not recognized";
    }
}

// Modify applyStyle to handle selection
function applyStyle(command) {
    const style = styleMap[command];
    if (style) {
        applyStyleToSelection(command);
    } else {
        previewBox.style.cssText += style;
        commandSuggestions.textContent = `Applied: ${command}`;
    }
}
// Event listener for export button
const exportJsonButton = document.getElementById("export-json");

// Event listener for color picker
colorPicker.addEventListener("input", function() {
    const color = colorPicker.value;
    previewBox.style.color = color;
    commandSuggestions.textContent = `Text color set to: ${color}`;
});

// Event listener for text size slider
textSizeSlider.addEventListener("input", function() {
    const size = textSizeSlider.value + 'px';
    previewBox.style.fontSize = size;
    commandSuggestions.textContent = `Text size set to: ${size}`;
});
exportJsonButton.addEventListener("click", function() {
    const dataStr = JSON.stringify(styleMap, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'css_profile.json';
    a.click();

    URL.revokeObjectURL(url);
});