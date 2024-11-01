// // document.addEventListener("DOMContentLoaded", function() {
// //     const cssInput = document.getElementById("css-input");
// //     const submitCommand = document.getElementById("submit-command");
// //     const previewBox = document.getElementById("preview-box");
// //     const commandSuggestions = document.getElementById("command-suggestions");
// //     const jsonUpload = document.getElementById("json-upload");
// //     const exportJsonButton = document.getElementById("export-json");
// //     const colorPicker = document.getElementById("color-picker");
// //     const textSizeSlider = document.getElementById("text-size");
// //     const elementPalette = document.getElementById("element-palette");
// //
// //     // Initialize styleMap, load from localStorage if available
// //     let styleMap = JSON.parse(localStorage.getItem('styleMap')) || {
// //         "vs-text-slate-500": "color: #64748b;",
// //         "vs-bg-yellow-200": "background-color: #fef08a;",
// //         // Add more predefined styles here
// //     };
// //
// //     // Function to update the preview based on command
// //     function applyStyle(command) {
// //         const style = styleMap[command];
// //         if (style) {
// //             // Apply the style by updating the style attribute
// //             previewBox.style.cssText += style;
// //             commandSuggestions.textContent = `Applied: ${command}`;
// //         } else {
// //             commandSuggestions.textContent = "Command not recognized";
// //         }
// //     }
// //
// //     // Function to display available commands
// //     function displayCommands() {
// //         const commands = Object.keys(styleMap).sort();
// //         commandSuggestions.innerHTML = `
// //             <strong>Available Commands:</strong>
// //             <ul>
// //                 ${commands.map(cmd => `<li>${cmd}</li>`).join('')}
// //             </ul>
// //         `;
// //     }
// //
// //     // Initial display of commands
// //     displayCommands();
// //
// //     // Save styleMap to localStorage
// //     function saveStyleMap() {
// //         localStorage.setItem('styleMap', JSON.stringify(styleMap));
// //     }
// //
// //     // Event listener for submit button
// //     submitCommand.addEventListener("click", function() {
// //         const command = cssInput.value.trim();
// //         if (command !== "") {
// //             applyStyle(command);
// //             cssInput.value = "";
// //             saveStyleMap();
// //         }
// //     });
// //
// //     // Event listener for CSS command input (press Enter key)
// //     cssInput.addEventListener("keyup", function(event) {
// //         if (event.key === 'Enter') {
// //             submitCommand.click();
// //         }
// //     });
// //
// //     // Event listener for JSON upload
// //     jsonUpload.addEventListener("change", function(event) {
// //         const file = event.target.files[0];
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onload = function(e) {
// //                 try {
// //                     const jsonData = JSON.parse(e.target.result);
// //                     validateAndImportJSON(jsonData);
// //                 } catch (error) {
// //                     alert("Invalid JSON file. Please upload a correctly formatted JSON.");
// //                     console.error("JSON Parsing Error:", error);
// //                 }
// //             };
// //             reader.readAsText(file);
// //         }
// //     });
// //
// //     // Function to validate and import JSON data
// //     function validateAndImportJSON(data) {
// //         // Basic validation: data should be an object
// //         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
// //             alert("JSON structure is invalid. It should be an object with vs-* commands as keys.");
// //             return;
// //         }
// //
// //         let newCommands = [];
// //         // Iterate over each command in JSON and update styleMap
// //         for (const [command, style] of Object.entries(data)) {
// //             if (typeof command === 'string' && typeof style === 'string') {
// //                 if (command.startsWith('vs-')) {
// //                     styleMap[command] = style;
// //                     newCommands.push(command);
// //                 } else {
// //                     console.warn(`Command "${command}" does not start with "vs-". Skipping.`);
// //                 }
// //             } else {
// //                 console.warn(`Invalid command or style format for "${command}". Skipping.`);
// //             }
// //         }
// //
// //         if (newCommands.length > 0) {
// //             alert(`Imported ${newCommands.length} new command(s) successfully!`);
// //             displayCommands();
// //             saveStyleMap();
// //         } else {
// //             alert("No valid commands were imported.");
// //         }
// //
// //         console.log("Updated styleMap:", styleMap);
// //     }
// //
// //     // Event listener for export button
// //     exportJsonButton.addEventListener("click", function() {
// //         const dataStr = JSON.stringify(styleMap, null, 2);
// //         const blob = new Blob([dataStr], { type: "application/json" });
// //         const url = URL.createObjectURL(blob);
// //
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = 'css_profile.json';
// //         a.click();
// //
// //         URL.revokeObjectURL(url);
// //     });
// //
// //     // Event listener for color picker
// //     colorPicker.addEventListener("input", function() {
// //         const color = colorPicker.value;
// //         previewBox.style.color = color;
// //         commandSuggestions.textContent = `Text color set to: ${color}`;
// //     });
// //
// //     // Event listener for text size slider
// //     textSizeSlider.addEventListener("input", function() {
// //         const size = textSizeSlider.value + 'px';
// //         previewBox.style.fontSize = size;
// //         commandSuggestions.textContent = `Text size set to: ${size}`;
// //     });
// //
// //     // Drag-and-Drop Functionality
// //     const draggableElements = document.querySelectorAll('.draggable-element');
// //
// //     draggableElements.forEach(elem => {
// //         elem.addEventListener('dragstart', dragStart);
// //     });
// //
// //     function dragStart(event) {
// //         event.dataTransfer.setData('text/plain', event.target.dataset.type);
// //     }
// //
// //     previewBox.addEventListener('dragover', dragOver);
// //     previewBox.addEventListener('drop', dropElement);
// //
// //     function dragOver(event) {
// //         event.preventDefault();
// //     }
// //
// //     function dropElement(event) {
// //         event.preventDefault();
// //         const type = event.dataTransfer.getData('text/plain');
// //         if (type === 'text') {
// //             const newText = document.createElement('p');
// //             newText.textContent = 'New Text Element';
// //             newText.className = 'draggable-text';
// //             newText.style.position = 'absolute';
// //             newText.style.left = `${event.offsetX}px`;
// //             newText.style.top = `${event.offsetY}px`;
// //             newText.contentEditable = true;
// //             previewBox.appendChild(newText);
// //         }
// //         // Add more element types as needed
// //     }
// //
// //     // Make dynamically added elements draggable within the preview box
// //     previewBox.addEventListener('mousedown', function(event) {
// //         const target = event.target;
// //         if (target.classList.contains('draggable-text')) {
// //             let shiftX = event.clientX - target.getBoundingClientRect().left;
// //             let shiftY = event.clientY - target.getBoundingClientRect().top;
// //
// //             function moveAt(pageX, pageY) {
// //                 target.style.left = pageX - shiftX - previewBox.getBoundingClientRect().left + 'px';
// //                 target.style.top = pageY - shiftY - previewBox.getBoundingClientRect().top + 'px';
// //             }
// //
// //             function onMouseMove(event) {
// //                 moveAt(event.pageX, event.pageY);
// //             }
// //
// //             document.addEventListener('mousemove', onMouseMove);
// //
// //             target.onmouseup = function() {
// //                 document.removeEventListener('mousemove', onMouseMove);
// //                 target.onmouseup = null;
// //             };
// //         }
// //     });
// //
// //     // Prevent default behavior to allow text selection within content-editable elements
// //     previewBox.addEventListener('dragstart', function(event) {
// //         if (event.target.classList.contains('draggable-text')) {
// //             event.preventDefault();
// //         }
// //     });
// //
// //     // Save styleMap when the window is unloaded
// //     window.addEventListener('beforeunload', saveStyleMap);
//
// // });
// // editor.js
//
// document.addEventListener("DOMContentLoaded", function() {
//     const cssInput = document.getElementById("css-input");
//     const submitCommand = document.getElementById("submit-command");
//     const previewBox = document.getElementById("preview-box");
//     const commandSuggestions = document.getElementById("command-suggestions");
//     const jsonUpload = document.getElementById("json-upload");
//     const exportJsonButton = document.getElementById("export-json");
//     const colorPicker = document.getElementById("color-picker");
//     const textSizeSlider = document.getElementById("text-size");
//     const jsonFolderPath = "json/"; // Path to the json folder
//
//     // Configure Toastr Options
//     toastr.options = {
//         "closeButton": true,
//         "debug": false,
//         "newestOnTop": true,
//         "progressBar": true,
//         "positionClass": "toast-top-right",
//         "preventDuplicates": false,
//         "onclick": null,
//         "showDuration": "300",
//         "hideDuration": "1000",
//         "timeOut": "3000",
//         "extendedTimeOut": "1000",
//         "showEasing": "swing",
//         "hideEasing": "linear",
//         "showMethod": "fadeIn",
//         "hideMethod": "fadeOut"
//     };
//
//     // Initialize styleMap, load from localStorage if available
//     let styleMap = JSON.parse(localStorage.getItem('styleMap')) || {
//         "vs-text-slate-500": { category: "color", property: "color", value: "#64748b" },
//         "vs-bg-yellow-200": { category: "background-color", property: "backgroundColor", value: "#fef08a" },
//         // Add more predefined styles here with categories
//     };
//
//     // Function to update the preview based on command
//     function applyStyle(command) {
//         const style = styleMap[command];
//         if (style) {
//             // Apply the style based on its category
//             switch (style.category) {
//                 case "color":
//                     previewBox.style.color = style.value;
//                     break;
//                 case "background-color":
//                     previewBox.style.backgroundColor = style.value;
//                     break;
//                 case "border":
//                     previewBox.style.border = style.value;
//                     break;
//                 case "font-size":
//                     previewBox.style.fontSize = style.value;
//                     break;
//                 // Add more categories as needed
//                 default:
//                     // Fallback: Apply entire style as cssText
//                     previewBox.style.cssText += style.value;
//             }
//             toastr.success(`Applied: ${command}`);
//             updateCommandSuggestions(command);
//             saveStyleMap();
//         } else {
//             toastr.error("Command not recognized");
//         }
//     }
//
//     // Function to display available commands
//     function displayCommands() {
//         const commands = Object.keys(styleMap).sort();
//         commandSuggestions.innerHTML = `
//             <strong>Available Commands:</strong>
//             <ul>
//                 ${commands.map(cmd => `<li>${cmd}</li>`).join('')}
//             </ul>
//         `;
//     }
//
//     // Function to update command suggestions (highlight applied command)
//     function updateCommandSuggestions(appliedCommand) {
//         const listItems = commandSuggestions.querySelectorAll('li');
//         listItems.forEach(li => {
//             if (li.textContent === appliedCommand) {
//                 li.style.fontWeight = 'bold';
//                 li.style.color = '#10b981'; // Green color for applied command
//             } else {
//                 li.style.fontWeight = 'normal';
//                 li.style.color = '#4b5563';
//             }
//         });
//     }
//
//     // Initial display of commands
//     displayCommands();
//
//     // Save styleMap to localStorage
//     function saveStyleMap() {
//         localStorage.setItem('styleMap', JSON.stringify(styleMap));
//     }
//
//     // Event listener for submit button
//     submitCommand.addEventListener("click", function() {
//         const command = cssInput.value.trim();
//         if (command !== "") {
//             applyStyle(command);
//             cssInput.value = "";
//         } else {
//             toastr.warning("Please enter a command to apply.");
//         }
//     });
//
//     // Event listener for CSS command input (press Enter key)
//     cssInput.addEventListener("keyup", function(event) {
//         if (event.key === 'Enter') {
//             submitCommand.click();
//         }
//     });
//
//     // Event listener for JSON upload
//     jsonUpload.addEventListener("change", function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 try {
//                     const jsonData = JSON.parse(e.target.result);
//                     validateAndImportJSON(jsonData);
//                 } catch (error) {
//                     toastr.error("Invalid JSON file. Please upload a correctly formatted JSON.");
//                     console.error("JSON Parsing Error:", error);
//                 }
//             };
//             reader.readAsText(file);
//             // Reset the file input value to allow uploading the same file again if needed
//             event.target.value = "";
//         }
//     });
//
//     // Function to validate and import JSON data
//     function validateAndImportJSON(data) {
//         // Basic validation: data should be an object
//         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
//             toastr.error("JSON structure is invalid. It should be an object with vs-* commands as keys.");
//             return;
//         }
//
//         let newCommands = [];
//         // Iterate over each command in JSON and update styleMap
//         for (const [command, style] of Object.entries(data)) {
//             if (typeof command === 'string' && typeof style === 'object') {
//                 if (command.startsWith('vs-')) {
//                     const { category, property, value } = style;
//                     if (category && property && value) {
//                         styleMap[command] = { category, property, value };
//                         newCommands.push(command);
//                     } else {
//                         console.warn(`Incomplete style definition for "${command}". Skipping.`);
//                         toastr.warning(`Incomplete style for "${command}". Skipping.`);
//                     }
//                 } else {
//                     console.warn(`Command "${command}" does not start with "vs-". Skipping.`);
//                     toastr.warning(`Invalid command "${command}". Skipping.`);
//                 }
//             } else if (typeof command === 'string' && typeof style === 'string') {
//                 // If style is a string, attempt to infer category
//                 if (command.startsWith('vs-')) {
//                     let inferredCategory = "other";
//                     let inferredProperty = "";
//                     let inferredValue = style;
//
//                     if (style.includes("color")) {
//                         inferredCategory = "color";
//                         inferredProperty = "color";
//                         inferredValue = extractColor(style);
//                     } else if (style.includes("background-color")) {
//                         inferredCategory = "background-color";
//                         inferredProperty = "backgroundColor";
//                         inferredValue = extractColor(style);
//                     } else if (style.includes("border")) {
//                         inferredCategory = "border";
//                         inferredProperty = "border";
//                         inferredValue = style;
//                     } else if (style.includes("font-size")) {
//                         inferredCategory = "font-size";
//                         inferredProperty = "fontSize";
//                         inferredValue = extractFontSize(style);
//                     }
//
//                     styleMap[command] = { category: inferredCategory, property: inferredProperty, value: inferredValue };
//                     newCommands.push(command);
//                 }
//             } else {
//                 console.warn(`Invalid command or style format for "${command}". Skipping.`);
//                 toastr.warning(`Invalid format for "${command}". Skipping.`);
//             }
//         }
//
//         if (newCommands.length > 0) {
//             toastr.success(`Imported ${newCommands.length} new command(s) successfully!`);
//             displayCommands();
//             saveStyleMap();
//         } else {
//             toastr.warning("No valid commands were imported.");
//         }
//
//         console.log("Updated styleMap:", styleMap);
//     }
//
//     // Helper functions to extract color and font-size from style strings
//     function extractColor(styleString) {
//         const match = styleString.match(/color:\s*(#[0-9a-fA-F]{3,6})/);
//         return match ? match[1] : '#000000'; // Default to black if not found
//     }
//
//     function extractFontSize(styleString) {
//         const match = styleString.match(/font-size:\s*([\d.]+px)/);
//         return match ? match[1] : '16px'; // Default to 16px if not found
//     }
//
//     // Event listener for export button
//     exportJsonButton.addEventListener("click", function() {
//         const dataStr = JSON.stringify(styleMap, null, 2);
//         const blob = new Blob([dataStr], { type: "application/json" });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'css_profile.json';
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success("CSS profile exported successfully!");
//     });
//
//     // Event listener for color picker
//     colorPicker.addEventListener("input", function() {
//         const color = colorPicker.value;
//         previewBox.style.color = color;
//         toastr.info(`Text color set to: ${color}`);
//     });
//
//     // Event listener for text size slider
//     textSizeSlider.addEventListener("input", function() {
//         const size = textSizeSlider.value + 'px';
//         previewBox.style.fontSize = size;
//         toastr.info(`Text size set to: ${size}`);
//     });
//
//     // Save styleMap when the window is unloaded
//     window.addEventListener('beforeunload', saveStyleMap);
// });

// editor.js

document.addEventListener("DOMContentLoaded", function() {
    const cssInput = document.getElementById("css-input");
    const submitCommand = document.getElementById("submit-command");
    const previewFrame = document.getElementById("preview-frame");
    const commandSuggestions = document.getElementById("command-suggestions");
    const jsonUpload = document.getElementById("json-upload");
    const exportJsonButton = document.getElementById("export-json");
    const colorPicker = document.getElementById("color-picker");
    const textSizeSlider = document.getElementById("text-size");
    const cssCode = document.getElementById("css-code");
    const htmlCode = document.getElementById("html-code");
    const jsCode = document.getElementById("js-code");

    // Configure Toastr Options
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    // Initialize Codes, load from localStorage if available
    let savedCSS = localStorage.getItem('cssCode') || '';
    let savedHTML = localStorage.getItem('htmlCode') || '';
    let savedJS = localStorage.getItem('jsCode') || '';

    cssCode.value = savedCSS;
    htmlCode.value = savedHTML;
    jsCode.value = savedJS;

    // Function to update the preview iframe
    function updatePreview() {
        const css = cssCode.value;
        const html = htmlCode.value;
        const js = jsCode.value;

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

    // Initial Preview Update
    updatePreview();

    // Function to save codes to localStorage
    function saveCodes() {
        localStorage.setItem('cssCode', cssCode.value);
        localStorage.setItem('htmlCode', htmlCode.value);
        localStorage.setItem('jsCode', jsCode.value);
    }

    // Event listeners for code editors
    [cssCode, htmlCode, jsCode].forEach(editor => {
        editor.addEventListener('input', function() {
            updatePreview();
            saveCodes();
        });
    });

    // Event listener for submit command (apply CSS command)
    submitCommand.addEventListener("click", function() {
        const command = cssInput.value.trim();
        if (command !== "") {
            // Append the command to the CSS code area
            cssCode.value += `\n${command}`;
            updatePreview();
            saveCodes();
            toastr.success(`Applied: ${command}`);
            cssInput.value = "";
        } else {
            toastr.warning("Please enter a CSS command to apply.");
        }
    });

    // Event listener for CSS command input (press Enter key)
    cssInput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            submitCommand.click();
        }
    });

    // Function to handle JSON import
    function importJSON(data) {
        if (typeof data !== 'object' || Array.isArray(data) || data === null) {
            toastr.error("Invalid JSON structure.");
            return;
        }

        // Expecting the JSON to have css, html, and js properties
        const { css, html, js } = data;

        if (css && typeof css === 'string') {
            cssCode.value += `\n${css}`;
            toastr.success("Imported CSS successfully!");
        }

        if (html && typeof html === 'string') {
            htmlCode.value += `\n${html}`;
            toastr.success("Imported HTML successfully!");
        }

        if (js && typeof js === 'string') {
            jsCode.value += `\n${js}`;
            toastr.success("Imported JavaScript successfully!");
        }

        updatePreview();
        saveCodes();
    }

    // Event listener for JSON upload
    jsonUpload.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    importJSON(jsonData);
                } catch (error) {
                    toastr.error("Invalid JSON file. Please upload a correctly formatted JSON.");
                    console.error("JSON Parsing Error:", error);
                }
            };
            reader.readAsText(file);
            // Reset the file input value to allow uploading the same file again if needed
            event.target.value = "";
        }
    });

    // Function to export current codes as JSON
    function exportJSON() {
        const data = {
            css: cssCode.value,
            html: htmlCode.value,
            js: jsCode.value
        };

        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'fraymz_profile.json';
        a.click();

        URL.revokeObjectURL(url);
        toastr.success("CSS profile exported successfully!");
    }

    // Event listener for export button
    exportJsonButton.addEventListener("click", exportJSON);

    // Event listeners for color picker and text size slider
    colorPicker.addEventListener("input", function() {
        const color = colorPicker.value;
        cssCode.value += `\ncolor: ${color};`;
        updatePreview();
        saveCodes();
        toastr.info(`Text color set to: ${color}`);
    });

    textSizeSlider.addEventListener("input", function() {
        const size = textSizeSlider.value + 'px';
        cssCode.value += `\nfont-size: ${size};`;
        updatePreview();
        saveCodes();
        toastr.info(`Text size set to: ${size}`);
    });

    // Function to display available commands (optional)
    function displayCommands() {
        // Example: Display predefined commands or dynamic commands
        // For simplicity, this function is left empty
    }

    // Initial display of commands
    displayCommands();

    // Save codes when the window is unloaded
    window.addEventListener('beforeunload', saveCodes);
});