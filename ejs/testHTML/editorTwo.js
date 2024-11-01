document.addEventListener("DOMContentLoaded", function() {
    const cssInput = document.getElementById("css-input");
    const previewBox = document.getElementById("preview-box");
    const commandSuggestions = document.getElementById("command-suggestions");
    const jsonUpload = document.getElementById("json-upload");

    // Initial styleMap with predefined styles
    let styleMap = {
        "vs-text-slate-500": "color: #64748b;",
        "vs-bg-yellow-200": "background-color: #fef08a;",
        // Add more predefined styles here
    };

    // Function to update the preview based on command
    function applyStyle(command) {
        const style = styleMap[command];
        if (style) {
            previewBox.style = style;
            commandSuggestions.textContent = `Applied: ${command}`;
        } else {
            commandSuggestions.textContent = "Command not recognized";
        }
    }

    // Function to display available commands
    function displayCommands() {
        const commands = Object.keys(styleMap).sort();
        commandSuggestions.innerHTML = `
            <strong>Available Commands:</strong>
            <ul>
                ${commands.map(cmd => `<li>${cmd}</li>`).join('')}
            </ul>
        `;
    }

    // Initial display of commands
    displayCommands();

    // Event listener for CSS command input
    cssInput.addEventListener("input", function() {
        const command = cssInput.value.trim();
        applyStyle(command);
    });

    // Event listener for JSON upload
    jsonUpload.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    validateAndImportJSON(jsonData);
                } catch (error) {
                    alert("Invalid JSON file. Please upload a correctly formatted JSON.");
                    console.error("JSON Parsing Error:", error);
                }
            };
            reader.readAsText(file);
        }
    });

    // Function to validate and import JSON data
    function validateAndImportJSON(data) {
        // Basic validation: data should be an object
        if (typeof data !== 'object' || Array.isArray(data) || data === null) {
            alert("JSON structure is invalid. It should be an object with vs-* commands as keys.");
            return;
        }

        let newCommands = [];
        // Iterate over each command in JSON and update styleMap
        for (const [command, style] of Object.entries(data)) {
            if (typeof command === 'string' && typeof style === 'string') {
                if (command.startsWith('vs-')) {
                    styleMap[command] = style;
                    newCommands.push(command);
                } else {
                    console.warn(`Command "${command}" does not start with "vs-". Skipping.`);
                }
            } else {
                console.warn(`Invalid command or style format for "${command}". Skipping.`);
            }
        }

        if (newCommands.length > 0) {
            alert(`Imported ${newCommands.length} new command(s) successfully!`);
            displayCommands();
        } else {
            alert("No valid commands were imported.");
        }

        console.log("Updated styleMap:", styleMap);
    }
});