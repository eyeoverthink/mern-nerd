let styleMap = JSON.parse(localStorage.getItem('styleMap')) || {
    "vs-text-slate-500": "color: #64748b;",
    "vs-bg-yellow-200": "background-color: #fef08a;",
    // Add more predefined styles here
};

function saveStyleMap() {
    localStorage.setItem('styleMap', JSON.stringify(styleMap));
}

submitCommand.addEventListener("click", function() {
    const command = cssInput.value.trim();
    if (command !== "") {
        applyStyle(command);
        cssInput.value = "";
        saveStyleMap();
    }
});

if (newCommands.length > 0) {
    alert(`Imported ${newCommands.length} new command(s) successfully!`);
    displayCommands();
    saveStyleMap();
}

window.addEventListener('beforeunload', saveStyleMap);