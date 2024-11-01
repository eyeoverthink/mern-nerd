document.addEventListener("DOMContentLoaded", function() {
    const cssInput = document.getElementById("css-input");
    const submitCommand = document.getElementById("submit-command");
    const previewBox = document.getElementById("preview-box");
    const commandSuggestions = document.getElementById("command-suggestions");
    const jsonUpload = document.getElementById("json-upload");
    const exportJsonButton = document.getElementById("export-json");
    const colorPicker = document.getElementById("color-picker");
    const textSizeSlider = document.getElementById("text-size");
    const elementPalette = document.getElementById("element-palette");

    // Initialize styleMap, load from localStorage if available
    let styleMap = JSON.parse(localStorage.getItem('styleMap')) || {
        "vs-text-slate-500": "color: #64748b;",
        "vs-bg-yellow-200": "background-color: #fef08a;",
        // Add more predefined styles here
    };

    // Function to update the preview based on command
    function applyStyle(command) {
        const style = styleMap[command];
        if (style) {
            // Apply the style by updating the style attribute
            previewBox.style.cssText += style;
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

    // Save styleMap to localStorage
    function saveStyleMap() {
        localStorage.setItem('styleMap', JSON.stringify(styleMap));
    }

    // Event listener for submit button
    submitCommand.addEventListener("click", function() {
        const command = cssInput.value.trim();
        if (command !== "") {
            applyStyle(command);
            cssInput.value = "";
            saveStyleMap();
        }
    });

    // Event listener for CSS command input (press Enter key)
    cssInput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            submitCommand.click();
        }
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
            saveStyleMap();
        } else {
            alert("No valid commands were imported.");
        }

        console.log("Updated styleMap:", styleMap);
    }

    // Event listener for export button
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

    // Drag-and-Drop Functionality
    const draggableElements = document.querySelectorAll('.draggable-element');

    draggableElements.forEach(elem => {
        elem.addEventListener('dragstart', dragStart);
    });

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.type);
    }

    previewBox.addEventListener('dragover', dragOver);
    previewBox.addEventListener('drop', dropElement);

    function dragOver(event) {
        event.preventDefault();
    }

    function dropElement(event) {
        event.preventDefault();
        const type = event.dataTransfer.getData('text/plain');
        if (type === 'text') {
            const newText = document.createElement('p');
            newText.textContent = 'New Text Element';
            newText.className = 'draggable-text';
            newText.style.position = 'absolute';
            newText.style.left = `${event.offsetX}px`;
            newText.style.top = `${event.offsetY}px`;
            newText.contentEditable = true;
            previewBox.appendChild(newText);
        }
        // Add more element types as needed
    }

    // Make dynamically added elements draggable within the preview box
    previewBox.addEventListener('mousedown', function(event) {
        const target = event.target;
        if (target.classList.contains('draggable-text')) {
            let shiftX = event.clientX - target.getBoundingClientRect().left;
            let shiftY = event.clientY - target.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                target.style.left = pageX - shiftX - previewBox.getBoundingClientRect().left + 'px';
                target.style.top = pageY - shiftY - previewBox.getBoundingClientRect().top + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            target.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                target.onmouseup = null;
            };
        }
    });

    // Prevent default behavior to allow text selection within content-editable elements
    previewBox.addEventListener('dragstart', function(event) {
        if (event.target.classList.contains('draggable-text')) {
            event.preventDefault();
        }
    });

    // Save styleMap when the window is unloaded
    window.addEventListener('beforeunload', saveStyleMap);
});