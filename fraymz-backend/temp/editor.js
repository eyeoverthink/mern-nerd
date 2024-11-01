// // // // // editor.js
// // // //
// // // // document.addEventListener("DOMContentLoaded", function() {
// // // //     // CodeMirror Editors Initialization
// // // //     const cssCodeTextarea = document.getElementById("css-code");
// // // //     const htmlCodeTextarea = document.getElementById("html-code");
// // // //     const jsCodeTextarea = document.getElementById("js-code");
// // // //
// // // //     const cssCode = CodeMirror.fromTextArea(cssCodeTextarea, {
// // // //         mode: "css",
// // // //         theme: "eclipse",
// // // //         lineNumbers: true,
// // // //         autoCloseBrackets: true,
// // // //         matchBrackets: true
// // // //     });
// // // //
// // // //     const htmlCode = CodeMirror.fromTextArea(htmlCodeTextarea, {
// // // //         mode: "htmlmixed",
// // // //         theme: "eclipse",
// // // //         lineNumbers: true,
// // // //         autoCloseBrackets: true,
// // // //         matchBrackets: true
// // // //     });
// // // //
// // // //     const jsCode = CodeMirror.fromTextArea(jsCodeTextarea, {
// // // //         mode: "javascript",
// // // //         theme: "eclipse",
// // // //         lineNumbers: true,
// // // //         autoCloseBrackets: true,
// // // //         matchBrackets: true
// // // //     });
// // // //
// // // //     // Toastr Configuration
// // // //     toastr.options = {
// // // //         "closeButton": true,
// // // //         "debug": false,
// // // //         "newestOnTop": true,
// // // //         "progressBar": true,
// // // //         "positionClass": "toast-top-right",
// // // //         "preventDuplicates": false,
// // // //         "onclick": null,
// // // //         "showDuration": "300",
// // // //         "hideDuration": "1000",
// // // //         "timeOut": "3000",
// // // //         "extendedTimeOut": "1000",
// // // //         "showEasing": "swing",
// // // //         "hideEasing": "linear",
// // // //         "showMethod": "fadeIn",
// // // //         "hideMethod": "fadeOut"
// // // //     };
// // // //
// // // //     // Initial Codes Loading from localStorage
// // // //     let savedCSS = localStorage.getItem('cssCode') || '';
// // // //     let savedHTML = localStorage.getItem('htmlCode') || '';
// // // //     let savedJS = localStorage.getItem('jsCode') || '';
// // // //
// // // //     cssCode.setValue(savedCSS);
// // // //     htmlCode.setValue(savedHTML);
// // // //     jsCode.setValue(savedJS);
// // // //
// // // //     // Function to update the preview iframe
// // // //     function updatePreview() {
// // // //         const css = cssCode.getValue();
// // // //         const html = htmlCode.getValue();
// // // //         const js = jsCode.getValue();
// // // //
// // // //         const previewDocument = `
// // // //             <!DOCTYPE html>
// // // //             <html lang="en">
// // // //             <head.ejs>
// // // //                 <style>
// // // //                     ${css}
// // // //                 </style>
// // // //             </head.ejs>
// // // //             <body>
// // // //                 ${html}
// // // //                 <script>
// // // //                     ${js}
// // // //                 </script>
// // // //             </body>
// // // //             </html>
// // // //         `;
// // // //
// // // //         const blob = new Blob([previewDocument], { type: 'text/html' });
// // // //         const url = URL.createObjectURL(blob);
// // // //         previewFrame.src = url;
// // // //
// // // //         // Clean up the URL object after the iframe has loaded
// // // //         previewFrame.onload = function() {
// // // //             URL.revokeObjectURL(url);
// // // //         };
// // // //     }
// // // //
// // // //     // Initial Preview Update
// // // //     updatePreview();
// // // //
// // // //     // Function to save codes to localStorage
// // // //     function saveCodes() {
// // // //         localStorage.setItem('cssCode', cssCode.getValue());
// // // //         localStorage.setItem('htmlCode', htmlCode.getValue());
// // // //         localStorage.setItem('jsCode', jsCode.getValue());
// // // //         toastr.success("Changes saved successfully!");
// // // //     }
// // // //
// // // //     // Event listeners for CodeMirror editors
// // // //     [cssCode, htmlCode, jsCode].forEach(editor => {
// // // //         editor.on('change', function() {
// // // //             // Only update the preview without saving on each change
// // // //             updatePreview();
// // // //         });
// // // //     });
// // // //
// // // //     // Apply Buttons Event Listeners
// // // //     document.getElementById("apply-css").addEventListener("click", function() {
// // // //         saveCodes();
// // // //         toastr.success("CSS applied and saved!");
// // // //     });
// // // //
// // // //     document.getElementById("apply-html").addEventListener("click", function() {
// // // //         saveCodes();
// // // //         toastr.success("HTML applied and saved!");
// // // //     });
// // // //
// // // //     document.getElementById("apply-js").addEventListener("click", function() {
// // // //         saveCodes();
// // // //         toastr.success("JavaScript applied and saved!");
// // // //     });
// // // //
// // // //     // Sliders and Apply Buttons for Style Categories
// // // //     // Color
// // // //     const colorSlider = document.getElementById("color-slider");
// // // //     const applyColorBtn = document.getElementById("apply-color");
// // // //     const currentColor = document.querySelector(".style-category:nth-child(1) .current-value");
// // // //
// // // //     applyColorBtn.addEventListener("click", function() {
// // // //         const color = colorSlider.value;
// // // //         const cssCommand = `color: ${color};`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentColor.textContent = `Current Color: ${color}`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Color: ${color}`);
// // // //     });
// // // //
// // // //     // Background Color
// // // //     const bgColorSlider = document.getElementById("background-color-slider");
// // // //     const applyBgColorBtn = document.getElementById("apply-background-color");
// // // //     const currentBgColor = document.querySelector(".style-category:nth-child(2) .current-value");
// // // //
// // // //     applyBgColorBtn.addEventListener("click", function() {
// // // //         const bgColor = bgColorSlider.value;
// // // //         const cssCommand = `background-color: ${bgColor};`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentBgColor.textContent = `Current Background Color: ${bgColor}`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Background Color: ${bgColor}`);
// // // //     });
// // // //
// // // //     // Border
// // // //     const borderColorSlider = document.getElementById("border-color-slider");
// // // //     const borderWidthSlider = document.getElementById("border-width-slider");
// // // //     const applyBorderBtn = document.getElementById("apply-border");
// // // //     const currentBorder = document.querySelector(".style-category:nth-child(3) .current-value");
// // // //
// // // //     applyBorderBtn.addEventListener("click", function() {
// // // //         const borderColor = borderColorSlider.value;
// // // //         const borderWidth = borderWidthSlider.value;
// // // //         const cssCommand = `border: ${borderWidth}px solid ${borderColor};`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentBorder.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Border: ${borderWidth}px solid ${borderColor}`);
// // // //     });
// // // //
// // // //     // Font Size
// // // //     const fontSizeSlider = document.getElementById("font-size-slider");
// // // //     const applyFontSizeBtn = document.getElementById("apply-font-size");
// // // //     const currentFontSize = document.querySelector(".style-category:nth-child(4) .current-value");
// // // //
// // // //     applyFontSizeBtn.addEventListener("click", function() {
// // // //         const fontSize = fontSizeSlider.value;
// // // //         const cssCommand = `font-size: ${fontSize}px;`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentFontSize.textContent = `Current Font Size: ${fontSize}px`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Font Size: ${fontSize}px`);
// // // //     });
// // // //
// // // //     // Scale
// // // //     const scaleSlider = document.getElementById("scale-slider");
// // // //     const applyScaleBtn = document.getElementById("apply-scale");
// // // //     const currentScale = document.querySelector(".style-category:nth-child(5) .current-value");
// // // //
// // // //     applyScaleBtn.addEventListener("click", function() {
// // // //         const scale = scaleSlider.value;
// // // //         const cssCommand = `transform: scale(${scale});`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentScale.textContent = `Current Scale: ${scale}`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Scale: ${scale}`);
// // // //     });
// // // //
// // // //     // Z-Index
// // // //     const zIndexInput = document.getElementById("z-index-input");
// // // //     const applyZIndexBtn = document.getElementById("apply-z-index");
// // // //     const currentZIndex = document.querySelector(".style-category:nth-child(6) .current-value");
// // // //
// // // //     applyZIndexBtn.addEventListener("click", function() {
// // // //         const zIndex = zIndexInput.value;
// // // //         const cssCommand = `z-index: ${zIndex};`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentZIndex.textContent = `Current Z-Index: ${zIndex}`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Z-Index: ${zIndex}`);
// // // //     });
// // // //
// // // //     // Opacity
// // // //     const opacitySlider = document.getElementById("opacity-slider");
// // // //     const applyOpacityBtn = document.getElementById("apply-opacity");
// // // //     const currentOpacity = document.querySelector(".style-category:nth-child(7) .current-value");
// // // //
// // // //     applyOpacityBtn.addEventListener("click", function() {
// // // //         const opacity = opacitySlider.value;
// // // //         const cssCommand = `opacity: ${opacity};`;
// // // //         cssCode.replaceRange(`\n${cssCommand}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentOpacity.textContent = `Current Opacity: ${opacity}`;
// // // //         updatePreview();
// // // //         toastr.info(`Applied Opacity: ${opacity}`);
// // // //     });
// // // //
// // // //     // Animation Controls
// // // //     const addAnimationButton = document.getElementById("add-animation");
// // // //     const animationNameInput = document.getElementById("animation-name");
// // // //     const animationDurationInput = document.getElementById("animation-duration");
// // // //     const animationIterationInput = document.getElementById("animation-iteration");
// // // //     const animationTimingSelect = document.getElementById("animation-timing");
// // // //
// // // //     addAnimationButton.addEventListener("click", function() {
// // // //         const name = animationNameInput.value.trim();
// // // //         const duration = animationDurationInput.value.trim();
// // // //         const iteration = animationIterationInput.value.trim();
// // // //         const timing = animationTimingSelect.value;
// // // //
// // // //         if (name === "" || duration === "" || iteration === "") {
// // // //             toastr.warning("Please fill in all animation fields.");
// // // //             return;
// // // //         }
// // // //
// // // //         // Create keyframes if not already defined
// // // //         const keyframesName = name;
// // // //         const keyframes = `
// // // // @keyframes ${keyframesName} {
// // // //     from { opacity: 0; }
// // // //     to { opacity: 1; }
// // // // }
// // // // `;
// // // //         cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //
// // // //         // Append animation property to CSS code area
// // // //         const animationProperty = `animation: ${keyframesName} ${duration}s ${timing} ${iteration};`;
// // // //         cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // // //         currentOpacity.textContent = `Current Opacity: ${opacitySlider.value}`;
// // // //         updatePreview();
// // // //         toastr.success(`Added animation: ${animationProperty}`);
// // // //
// // // //         // Clear animation input fields
// // // //         animationNameInput.value = "";
// // // //         animationDurationInput.value = "";
// // // //         animationIterationInput.value = "";
// // // //         animationTimingSelect.value = "linear";
// // // //     });
// // // //
// // // //     // JSON Import Functionality
// // // //     const jsonUpload = document.getElementById("json-upload");
// // // //
// // // //     jsonUpload.addEventListener("change", function(event) {
// // // //         const file = event.target.files[0];
// // // //         if (file) {
// // // //             const reader = new FileReader();
// // // //             reader.onload = function(e) {
// // // //                 try {
// // // //                     const jsonData = JSON.parse(e.target.result);
// // // //                     validateAndImportJSON(jsonData);
// // // //                 } catch (error) {
// // // //                     toastr.error("Invalid JSON file. Please upload a correctly formatted JSON.");
// // // //                     console.error("JSON Parsing Error:", error);
// // // //                 }
// // // //             };
// // // //             reader.readAsText(file);
// // // //             // Reset the file input value to allow uploading the same file again if needed
// // // //             event.target.value = "";
// // // //         }
// // // //     });
// // // //
// // // //     // Function to validate and import JSON data
// // // //     function validateAndImportJSON(data) {
// // // //         // Basic validation: data should be an object
// // // //         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
// // // //             toastr.error("JSON structure is invalid. It should be an object with style properties as keys.");
// // // //             return;
// // // //         }
// // // //
// // // //         let newCommands = [];
// // // //         // Iterate over each command in JSON and update styleMap
// // // //         for (const [property, value] of Object.entries(data)) {
// // // //             if (typeof property === 'string' && typeof value === 'string') {
// // // //                 styleMap[property] = value;
// // // //                 newCommands.push(property);
// // // //                 // Optionally, update the UI sliders based on imported properties
// // // //                 switch(property) {
// // // //                     case 'color':
// // // //                         document.getElementById("color-slider").value = hexToRgba(value).color;
// // // //                         break;
// // // //                     case 'background-color':
// // // //                         document.getElementById("background-color-slider").value = hexToRgba(value).color;
// // // //                         break;
// // // //                     case 'border':
// // // //                         // Parse border value
// // // //                         const borderParts = value.split(' ');
// // // //                         if(borderParts.length === 3) {
// // // //                             document.getElementById("border-width-slider").value = borderParts[0].replace('px','');
// // // //                             document.getElementById("border-color-slider").value = borderParts[2].replace(';','');
// // // //                         }
// // // //                         break;
// // // //                     case 'font-size':
// // // //                         document.getElementById("font-size-slider").value = parseInt(value.replace('px',''));
// // // //                         break;
// // // //                     case 'scale':
// // // //                         document.getElementById("scale-slider").value = parseFloat(value.match(/scale\(([^)]+)\)/)[1]);
// // // //                         break;
// // // //                     case 'z-index':
// // // //                         document.getElementById("z-index-input").value = value.replace(';','');
// // // //                         break;
// // // //                     case 'opacity':
// // // //                         document.getElementById("opacity-slider").value = parseFloat(value.replace(';',''));
// // // //                         break;
// // // //                     case 'animation':
// // // //                         // Handle animation if needed
// // // //                         break;
// // // //                     default:
// // // //                         break;
// // // //                 }
// // // //             } else {
// // // //                 console.warn(`Invalid property or value format for "${property}". Skipping.`);
// // // //             }
// // // //         }
// // // //
// // // //         if (newCommands.length > 0) {
// // // //             toastr.success(`Imported ${newCommands.length} new style property(s) successfully!`);
// // // //             saveCodes();
// // // //         } else {
// // // //             toastr.warning("No valid style properties were imported.");
// // // //         }
// // // //
// // // //         console.log("Updated styleMap:", styleMap);
// // // //     }
// // // //
// // // //     // Utility function to extract color from style value
// // // //     function hexToRgba(styleValue) {
// // // //         const colorMatch = styleValue.match(/color:\s*(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3});/);
// // // //         if (colorMatch) {
// // // //             return { color: colorMatch[1] };
// // // //         }
// // // //         return { color: "#000000" };
// // // //     }
// // // //
// // // //     // Export JSON Functionality
// // // //     document.getElementById("export-json").addEventListener("click", function() {
// // // //         const data = {
// // // //             color: cssCode.getValue().match(/color:\s*(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3});/)?.[1] || "",
// // // //             "background-color": cssCode.getValue().match(/background-color:\s*(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3});/)?.[1] || "",
// // // //             border: cssCode.getValue().match(/border:\s*([^;]+);/)?.[1] || "",
// // // //             "font-size": cssCode.getValue().match(/font-size:\s*(\d+)px;/)?.[1] || "",
// // // //             scale: cssCode.getValue().match(/transform:\s*scale\(([^)]+)\);/)?.[1] || "",
// // // //             "z-index": cssCode.getValue().match(/z-index:\s*(\d+);/)?.[1] || "",
// // // //             opacity: cssCode.getValue().match(/opacity:\s*([0-1](?:\.\d+)?);/)?.[1] || ""
// // // //         };
// // // //
// // // //         const dataStr = JSON.stringify(data, null, 2);
// // // //         const blob = new Blob([dataStr], { type: "application/json" });
// // // //         const url = URL.createObjectURL(blob);
// // // //
// // // //         const a = document.createElement('a');
// // // //         a.href = url;
// // // //         a.download = 'fraymz_profile.json';
// // // //         a.click();
// // // //
// // // //         URL.revokeObjectURL(url);
// // // //         toastr.success("CSS profile exported successfully!");
// // // //     });
// // // //
// // // //     // Save Codes when the window is unloaded
// // // //     window.addEventListener('beforeunload', saveCodes);
// // // // });
// // // // editor.js
// // //
// // // document.addEventListener("DOMContentLoaded", function() {
// // //     const cssInput = document.getElementById("css-input");
// // //     const submitCommand = document.getElementById("submit-command");
// // //     const previewFrame = document.getElementById("preview-frame");
// // //     const commandSuggestions = document.getElementById("command-suggestions");
// // //     const jsonUpload = document.getElementById("json-upload");
// // //     const exportJsonButton = document.getElementById("export-json");
// // //     const exportAllButton = document.getElementById("export-all");
// // //
// // //     // Separate Uploads and Exports
// // //     const cssUpload = document.getElementById("css-upload");
// // //     const exportCssButton = document.getElementById("export-css");
// // //
// // //     const htmlUpload = document.getElementById("html-upload");
// // //     const exportHtmlButton = document.getElementById("export-html");
// // //
// // //     const jsUpload = document.getElementById("js-upload");
// // //     const exportJsButton = document.getElementById("export-js");
// // //
// // //     // Style Category Elements
// // //     const colorSlider = document.getElementById("color-slider");
// // //     const applyColorButton = document.getElementById("apply-color");
// // //     const currentColorValue = document.querySelector(".style-category:nth-child(1) .current-value");
// // //
// // //     const backgroundColorSlider = document.getElementById("background-color-slider");
// // //     const applyBackgroundColorButton = document.getElementById("apply-background-color");
// // //     const currentBackgroundColorValue = document.querySelector(".style-category:nth-child(2) .current-value");
// // //
// // //     const borderColorSlider = document.getElementById("border-color-slider");
// // //     const borderWidthSlider = document.getElementById("border-width-slider");
// // //     const applyBorderButton = document.getElementById("apply-border");
// // //     const currentBorderValue = document.querySelector(".style-category:nth-child(3) .current-value");
// // //
// // //     const fontSizeSlider = document.getElementById("font-size-slider");
// // //     const applyFontSizeButton = document.getElementById("apply-font-size");
// // //     const currentFontSizeValue = document.querySelector(".style-category:nth-child(4) .current-value");
// // //
// // //     const scaleSlider = document.getElementById("scale-slider");
// // //     const applyScaleButton = document.getElementById("apply-scale");
// // //     const currentScaleValue = document.querySelector(".style-category:nth-child(5) .current-value");
// // //
// // //     const zIndexInput = document.getElementById("z-index-input");
// // //     const applyZIndexButton = document.getElementById("apply-z-index");
// // //     const currentZIndexValue = document.querySelector(".style-category:nth-child(6) .current-value");
// // //
// // //     const opacitySlider = document.getElementById("opacity-slider");
// // //     const applyOpacityButton = document.getElementById("apply-opacity");
// // //     const currentOpacityValue = document.querySelector(".style-category:nth-child(7) .current-value");
// // //
// // //     // Animation Controls
// // //     const animationNameInput = document.getElementById("animation-name");
// // //     const animationDurationInput = document.getElementById("animation-duration");
// // //     const animationIterationInput = document.getElementById("animation-iteration");
// // //     const animationTimingSelect = document.getElementById("animation-timing");
// // //     const addAnimationButton = document.getElementById("add-animation");
// // //
// // //     // Code Sections
// // //     const cssCodeTextarea = document.getElementById("css-code");
// // //     const htmlCodeTextarea = document.getElementById("html-code");
// // //     const jsCodeTextarea = document.getElementById("js-code");
// // //     const applyCssButton = document.getElementById("apply-css");
// // //     const applyHtmlButton = document.getElementById("apply-html");
// // //     const applyJsButton = document.getElementById("apply-js");
// // //
// // //     // Toastr Configuration
// // //     toastr.options = {
// // //         "closeButton": true,
// // //         "debug": false,
// // //         "newestOnTop": true,
// // //         "progressBar": true,
// // //         "positionClass": "toast-top-right",
// // //         "preventDuplicates": false,
// // //         "onclick": null,
// // //         "showDuration": "300",
// // //         "hideDuration": "1000",
// // //         "timeOut": "3000",
// // //         "extendedTimeOut": "1000",
// // //         "showEasing": "swing",
// // //         "hideEasing": "linear",
// // //         "showMethod": "fadeIn",
// // //         "hideMethod": "fadeOut"
// // //     };
// // //
// // //     // Initialize CodeMirror Editors
// // //     const cssCode = CodeMirror.fromTextArea(cssCodeTextarea, {
// // //         mode: "css",
// // //         theme: "eclipse",
// // //         lineNumbers: true,
// // //         autoCloseBrackets: true,
// // //         matchBrackets: true
// // //     });
// // //
// // //     const htmlCode = CodeMirror.fromTextArea(htmlCodeTextarea, {
// // //         mode: "htmlmixed",
// // //         theme: "eclipse",
// // //         lineNumbers: true,
// // //         autoCloseBrackets: true,
// // //         matchBrackets: true
// // //     });
// // //
// // //     const jsCode = CodeMirror.fromTextArea(jsCodeTextarea, {
// // //         mode: "javascript",
// // //         theme: "eclipse",
// // //         lineNumbers: true,
// // //         autoCloseBrackets: true,
// // //         matchBrackets: true
// // //     });
// // //
// // //     // Initialize Codes, load from localStorage if available
// // //     let savedCSS = localStorage.getItem('cssCode') || '';
// // //     let savedHTML = localStorage.getItem('htmlCode') || '';
// // //     let savedJS = localStorage.getItem('jsCode') || '';
// // //
// // //     cssCode.setValue(savedCSS);
// // //     htmlCode.setValue(savedHTML);
// // //     jsCode.setValue(savedJS);
// // //
// // //     // Function to update the preview iframe
// // //     function updatePreview() {
// // //         const css = cssCode.getValue();
// // //         const html = htmlCode.getValue();
// // //         const js = jsCode.getValue();
// // //
// // //         const previewDocument = `
// // //             <!DOCTYPE html>
// // //             <html lang="en">
// // //             <head.ejs>
// // //                 <style>
// // //                     ${css}
// // //                 </style>
// // //             </head.ejs>
// // //             <body>
// // //                 ${html}
// // //                 <script>
// // //                     ${js}
// // //                 </script>
// // //             </body>
// // //             </html>
// // //         `;
// // //
// // //         const blob = new Blob([previewDocument], { type: 'text/html' });
// // //         const url = URL.createObjectURL(blob);
// // //         previewFrame.src = url;
// // //
// // //         // Clean up the URL object after the iframe has loaded
// // //         previewFrame.onload = function() {
// // //             URL.revokeObjectURL(url);
// // //         };
// // //     }
// // //
// // //     // Initial Preview Update
// // //     updatePreview();
// // //
// // //     // Function to save codes to localStorage
// // //     function saveCodes() {
// // //         localStorage.setItem('cssCode', cssCode.getValue());
// // //         localStorage.setItem('htmlCode', htmlCode.getValue());
// // //         localStorage.setItem('jsCode', jsCode.getValue());
// // //         toastr.success("Changes saved successfully!");
// // //     }
// // //
// // //     // Event listeners for CodeMirror editors
// // //     [cssCode, htmlCode, jsCode].forEach(editor => {
// // //         editor.on('change', function() {
// // //             updatePreview();
// // //             saveCodes();
// // //         });
// // //     });
// // //
// // //     // Function to display available commands
// // //     function displayCommands() {
// // //         const commands = Object.keys(styleMap).sort();
// // //         commandSuggestions.innerHTML = `
// // //             <strong>Available Commands:</strong>
// // //             <ul>
// // //                 ${commands.map(cmd => `<li>${cmd}</li>`).join('')}
// // //             </ul>
// // //         `;
// // //     }
// // //
// // //     // Initial Command Display
// // //     displayCommands();
// // //
// // //     // Apply Command via Input
// // //     submitCommand.addEventListener("click", function() {
// // //         const command = cssInput.value.trim();
// // //         if (command !== "") {
// // //             const style = styleMap[command];
// // //             if (style) {
// // //                 cssCode.replaceRange(`\n${style}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //                 updatePreview();
// // //                 saveCodes();
// // //                 toastr.success(`Applied: ${command}`);
// // //                 cssInput.value = "";
// // //             } else {
// // //                 toastr.warning("Command not recognized. Please check the available commands.");
// // //             }
// // //         } else {
// // //             toastr.warning("Please enter a CSS command to apply.");
// // //         }
// // //     });
// // //
// // //     // Event listener for CSS command input (press Enter key)
// // //     cssInput.addEventListener("keyup", function(event) {
// // //         if (event.key === 'Enter') {
// // //             submitCommand.click();
// // //         }
// // //     });
// // //
// // //     // Function to handle JSON import
// // //     function importJSON(data) {
// // //         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
// // //             toastr.error("Invalid JSON structure. It should be an object with vs-* commands as keys.");
// // //             return;
// // //         }
// // //
// // //         let newCommands = [];
// // //         // Iterate over each command in JSON and update styleMap
// // //         for (const [command, style] of Object.entries(data)) {
// // //             if (typeof command === 'string' && typeof style === 'string') {
// // //                 if (command.startsWith('vs-')) {
// // //                     styleMap[command] = style;
// // //                     newCommands.push(command);
// // //                 } else {
// // //                     console.warn(`Command "${command}" does not start with "vs-". Skipping.`);
// // //                 }
// // //             } else {
// // //                 console.warn(`Invalid command or style format for "${command}". Skipping.`);
// // //             }
// // //         }
// // //
// // //         if (newCommands.length > 0) {
// // //             toastr.success(`Imported ${newCommands.length} new command(s) successfully!`);
// // //             displayCommands();
// // //         } else {
// // //             toastr.warning("No valid commands were imported.");
// // //         }
// // //
// // //         console.log("Updated styleMap:", styleMap);
// // //     }
// // //
// // //     // Event listener for JSON upload
// // //     jsonUpload.addEventListener("change", function(event) {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             const reader = new FileReader();
// // //             reader.onload = function(e) {
// // //                 try {
// // //                     const jsonData = JSON.parse(e.target.result);
// // //                     importJSON(jsonData);
// // //                 } catch (error) {
// // //                     toastr.error("Invalid JSON file. Please upload a correctly formatted JSON.");
// // //                     console.error("JSON Parsing Error:", error);
// // //                 }
// // //             };
// // //             reader.readAsText(file);
// // //             // Reset the file input value to allow uploading the same file again if needed
// // //             event.target.value = "";
// // //         }
// // //     });
// // //
// // //     // Function to export current codes as JSON
// // //     function exportJSON() {
// // //         const data = {
// // //             css: cssCode.getValue(),
// // //             html: htmlCode.getValue(),
// // //             js: jsCode.getValue()
// // //         };
// // //
// // //         const dataStr = JSON.stringify(data, null, 2);
// // //         const blob = new Blob([dataStr], { type: "application/json" });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = 'fraymz_profile.json';
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success("CSS profile exported successfully!");
// // //     }
// // //
// // //     // Event listener for export JSON button
// // //     exportJsonButton.addEventListener("click", exportJSON);
// // //
// // //     // Function to export CSS separately
// // //     function exportCSS() {
// // //         const cssData = cssCode.getValue();
// // //         const blob = new Blob([cssData], { type: "text/css" });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = 'styles.css';
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success("CSS exported successfully!");
// // //     }
// // //
// // //     // Event listener for export CSS button
// // //     exportCssButton.addEventListener("click", exportCSS);
// // //
// // //     // Function to export HTML separately
// // //     function exportHTML() {
// // //         const htmlData = htmlCode.getValue();
// // //         const blob = new Blob([htmlData], { type: "text/html" });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = 'index.html';
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success("HTML exported successfully!");
// // //     }
// // //
// // //     // Event listener for export HTML button
// // //     exportHtmlButton.addEventListener("click", exportHTML);
// // //
// // //     // Function to export JavaScript separately
// // //     function exportJS() {
// // //         const jsData = jsCode.getValue();
// // //         const blob = new Blob([jsData], { type: "application/javascript" });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = 'script.js';
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success("JavaScript exported successfully!");
// // //     }
// // //
// // //     // Event listener for export JS button
// // //     exportJsButton.addEventListener("click", exportJS);
// // //
// // //     // Function to export all as a combined HTML file
// // //     function exportAllAsHTML() {
// // //         const css = cssCode.getValue();
// // //         const html = htmlCode.getValue();
// // //         const js = jsCode.getValue();
// // //
// // //         const combinedHTML = `
// // // <!DOCTYPE html>
// // // <html lang="en">
// // // <head.ejs>
// // //     <meta charset="UTF-8">
// // //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // //     <title>Fraymz - Combined Output</title>
// // //     <style>
// // //         ${css}
// // //     </style>
// // // </head.ejs>
// // // <body>
// // //     ${html}
// // //     <script>
// // //         ${js}
// // //     </script>
// // // </body>
// // // </html>
// // //         `;
// // //
// // //         const blob = new Blob([combinedHTML], { type: "text/html" });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = 'combined_output.html';
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success("All files exported as combined HTML successfully!");
// // //     }
// // //
// // //     // Event listener for export all button
// // //     exportAllButton.addEventListener("click", exportAllAsHTML);
// // //
// // //     // StyleMap Initialization
// // //     let styleMap = {
// // //         "vs-text-slate-500": "color: #64748b;",
// // //         "vs-bg-yellow-200": "background-color: #fef08a;",
// // //         // Add more predefined styles here
// // //     };
// // //
// // //     // Function to apply styles to the preview
// // //     function applyStyle(command, style) {
// // //         if (style) {
// // //             previewFrame.contentWindow.document.body.style.cssText += style;
// // //             toastr.success(`Applied: ${command}`);
// // //         } else {
// // //             toastr.warning("Command not recognized. Please check the available commands.");
// // //         }
// // //     }
// // //
// // //     // Event Listeners for Style Categories
// // //
// // //     // 1. Color
// // //     applyColorButton.addEventListener("click", function() {
// // //         const color = colorSlider.value;
// // //         const style = `color: ${color};`;
// // //         applyStyle("Color", style);
// // //         currentColorValue.textContent = `Current Color: ${color}`;
// // //         cssCode.replaceRange(`\ncolor: ${color};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // 2. Background Color
// // //     applyBackgroundColorButton.addEventListener("click", function() {
// // //         const bgColor = backgroundColorSlider.value;
// // //         const style = `background-color: ${bgColor};`;
// // //         applyStyle("Background Color", style);
// // //         currentBackgroundColorValue.textContent = `Current Background Color: ${bgColor}`;
// // //         cssCode.replaceRange(`\nbackground-color: ${bgColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // 3. Border
// // //     applyBorderButton.addEventListener("click", function() {
// // //         const borderColor = borderColorSlider.value;
// // //         const borderWidth = borderWidthSlider.value;
// // //         const style = `border: ${borderWidth}px solid ${borderColor};`;
// // //         applyStyle("Border", style);
// // //         currentBorderValue.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
// // //         cssCode.replaceRange(`\nborder: ${borderWidth}px solid ${borderColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // 4. Font Size
// // //     applyFontSizeButton.addEventListener("click", function() {
// // //         const fontSize = fontSizeSlider.value;
// // //         const style = `font-size: ${fontSize}px;`;
// // //         applyStyle("Font Size", style);
// // //         currentFontSizeValue.textContent = `Current Font Size: ${fontSize}px`;
// // //         cssCode.replaceRange(`\nfont-size: ${fontSize}px;`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // 5. Scale
// // //     applyScaleButton.addEventListener("click", function() {
// // //         const scale = scaleSlider.value;
// // //         const style = `transform: scale(${scale});`;
// // //         applyStyle("Scale", style);
// // //         currentScaleValue.textContent = `Current Scale: ${scale}`;
// // //         cssCode.replaceRange(`\ntransform: scale(${scale});`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // 6. Z-Index
// // //     applyZIndexButton.addEventListener("click", function() {
// // //         const zIndex = zIndexInput.value;
// // //         const style = `z-index: ${zIndex};`;
// // //         applyStyle("Z-Index", style);
// // //         currentZIndexValue.textContent = `Current Z-Index: ${zIndex}`;
// // //         cssCode.replaceRange(`\nz-index: ${zIndex};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // 7. Opacity
// // //     applyOpacityButton.addEventListener("click", function() {
// // //         const opacity = opacitySlider.value;
// // //         const style = `opacity: ${opacity};`;
// // //         applyStyle("Opacity", style);
// // //         currentOpacityValue.textContent = `Current Opacity: ${opacity}`;
// // //         cssCode.replaceRange(`\nopacity: ${opacity};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //     });
// // //
// // //     // Animation Controls
// // //     addAnimationButton.addEventListener("click", function() {
// // //         const name = animationNameInput.value.trim();
// // //         const duration = animationDurationInput.value.trim();
// // //         const iteration = animationIterationInput.value.trim();
// // //         const timing = animationTimingSelect.value;
// // //
// // //         if (name === "" || duration === "" || iteration === "") {
// // //             toastr.warning("Please fill in all animation fields.");
// // //             return;
// // //         }
// // //
// // //         // Create keyframes if not already defined
// // //         const keyframesName = name;
// // //         const keyframes = `
// // // @keyframes ${keyframesName} {
// // //     from { opacity: 0; }
// // //     to { opacity: 1; }
// // // }
// // //         `;
// // //         cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //
// // //         // Append animation property to CSS code area
// // //         const animationProperty = `
// // // animation: ${keyframesName} ${duration}s ${timing} ${iteration};
// // //         `;
// // //         cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// // //         updatePreview();
// // //         saveCodes();
// // //         toastr.success(`Added animation: ${animationProperty.trim()}`);
// // //
// // //         // Clear animation input fields
// // //         animationNameInput.value = "";
// // //         animationDurationInput.value = "";
// // //         animationIterationInput.value = "";
// // //         animationTimingSelect.value = "linear";
// // //     });
// // //
// // //     // Function to handle uploading separate CSS, HTML, JS files
// // //     function handleFileUpload(inputElement, type) {
// // //         const file = inputElement.files[0];
// // //         if (file) {
// // //             const reader = new FileReader();
// // //             reader.onload = function(e) {
// // //                 const content = e.target.result;
// // //                 switch(type) {
// // //                     case 'css':
// // //                         cssCode.setValue(content);
// // //                         toastr.success("CSS file uploaded successfully!");
// // //                         break;
// // //                     case 'html':
// // //                         htmlCode.setValue(content);
// // //                         toastr.success("HTML file uploaded successfully!");
// // //                         break;
// // //                     case 'js':
// // //                         jsCode.setValue(content);
// // //                         toastr.success("JavaScript file uploaded successfully!");
// // //                         break;
// // //                     default:
// // //                         toastr.error("Unknown file type.");
// // //                 }
// // //                 updatePreview();
// // //                 saveCodes();
// // //             };
// // //             reader.readAsText(file);
// // //         }
// // //     }
// // //
// // //     // Event Listeners for Separate File Uploads
// // //     cssUpload.addEventListener("change", function() {
// // //         handleFileUpload(cssUpload, 'css');
// // //         // Reset the file input value to allow uploading the same file again if needed
// // //         cssUpload.value = "";
// // //     });
// // //
// // //     htmlUpload.addEventListener("change", function() {
// // //         handleFileUpload(htmlUpload, 'html');
// // //         htmlUpload.value = "";
// // //     });
// // //
// // //     jsUpload.addEventListener("change", function() {
// // //         handleFileUpload(jsUpload, 'js');
// // //         jsUpload.value = "";
// // //     });
// // //
// // //     // Function to export all codes as combined HTML
// // //     function exportAllAsHTML() {
// // //         const css = cssCode.getValue();
// // //         const html = htmlCode.getValue();
// // //         const js = jsCode.getValue();
// // //
// // //         const combinedHTML = `
// // // <!DOCTYPE html>
// // // <html lang="en">
// // // <head.ejs>
// // //     <meta charset="UTF-8">
// // //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // //     <title>Fraymz - Combined Output</title>
// // //     <style>
// // //         ${css}
// // //     </style>
// // // </head.ejs>
// // // <body>
// // //     ${html}
// // //     <script>
// // //         ${js}
// // //     </script>
// // // </body>
// // // </html>
// // //         `;
// // //
// // //         const blob = new Blob([combinedHTML], { type: "text/html" });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = 'combined_output.html';
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success("All files exported as combined HTML successfully!");
// // //     }
// // //
// // //     // Event Listener for Export All Button
// // //     exportAllButton.addEventListener("click", exportAllAsHTML);
// // //
// // //     // Function to validate and import JSON data
// // //     function validateAndImportJSON(data) {
// // //         // Basic validation: data should be an object
// // //         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
// // //             toastr.error("JSON structure is invalid. It should be an object with vs-* commands as keys.");
// // //             return;
// // //         }
// // //
// // //         let newCommands = [];
// // //         // Iterate over each command in JSON and update styleMap
// // //         for (const [command, style] of Object.entries(data)) {
// // //             if (typeof command === 'string' && typeof style === 'string') {
// // //                 if (command.startsWith('vs-')) {
// // //                     styleMap[command] = style;
// // //                     newCommands.push(command);
// // //                 } else {
// // //                     console.warn(`Command "${command}" does not start with "vs-". Skipping.`);
// // //                 }
// // //             } else {
// // //                 console.warn(`Invalid command or style format for "${command}". Skipping.`);
// // //             }
// // //         }
// // //
// // //         if (newCommands.length > 0) {
// // //             toastr.success(`Imported ${newCommands.length} new command(s) successfully!`);
// // //             displayCommands();
// // //         } else {
// // //             toastr.warning("No valid commands were imported.");
// // //         }
// // //
// // //         console.log("Updated styleMap:", styleMap);
// // //     }
// // //
// // //     // Function to handle uploading separate CSS, HTML, JS files
// // //     function handleFileUpload(inputElement, type) {
// // //         const file = inputElement.files[0];
// // //         if (file) {
// // //             const reader = new FileReader();
// // //             reader.onload = function(e) {
// // //                 const content = e.target.result;
// // //                 switch(type) {
// // //                     case 'css':
// // //                         cssCode.setValue(content);
// // //                         toastr.success("CSS file uploaded successfully!");
// // //                         break;
// // //                     case 'html':
// // //                         htmlCode.setValue(content);
// // //                         toastr.success("HTML file uploaded successfully!");
// // //                         break;
// // //                     case 'js':
// // //                         jsCode.setValue(content);
// // //                         toastr.success("JavaScript file uploaded successfully!");
// // //                         break;
// // //                     default:
// // //                         toastr.error("Unknown file type.");
// // //                 }
// // //                 updatePreview();
// // //                 saveCodes();
// // //             };
// // //             reader.readAsText(file);
// // //         }
// // //     }
// // //
// // //     // Function to handle file exports
// // //     function handleFileExport(content, type) {
// // //         let mimeType;
// // //         let fileName;
// // //         switch(type) {
// // //             case 'css':
// // //                 mimeType = "text/css";
// // //                 fileName = "styles.css";
// // //                 break;
// // //             case 'html':
// // //                 mimeType = "text/html";
// // //                 fileName = "index.html";
// // //                 break;
// // //             case 'js':
// // //                 mimeType = "application/javascript";
// // //                 fileName = "script.js";
// // //                 break;
// // //             default:
// // //                 toastr.error("Unknown file type for export.");
// // //                 return;
// // //         }
// // //
// // //         const blob = new Blob([content], { type: mimeType });
// // //         const url = URL.createObjectURL(blob);
// // //
// // //         const a = document.createElement('a');
// // //         a.href = url;
// // //         a.download = fileName;
// // //         a.click();
// // //
// // //         URL.revokeObjectURL(url);
// // //         toastr.success(`${type.toUpperCase()} exported successfully!`);
// // //     }
// // //
// // //     // Event Listeners for Separate File Exports
// // //     exportCssButton.addEventListener("click", function() {
// // //         const cssData = cssCode.getValue();
// // //         handleFileExport(cssData, 'css');
// // //     });
// // //
// // //     exportHtmlButton.addEventListener("click", function() {
// // //         const htmlData = htmlCode.getValue();
// // //         handleFileExport(htmlData, 'html');
// // //     });
// // //
// // //     exportJsButton.addEventListener("click", function() {
// // //         const jsData = jsCode.getValue();
// // //         handleFileExport(jsData, 'js');
// // //     });
// // //
// // // });
// //
// // // editor.js
// //
// // document.addEventListener("DOMContentLoaded", function() {
// //     // DOM Elements
// //     const cssInput = document.getElementById("css-input");
// //     const submitCommand = document.getElementById("submit-command");
// //     const previewFrame = document.getElementById("preview-frame");
// //     const commandSuggestions = document.getElementById("command-suggestions");
// //     const jsonUpload = document.getElementById("json-upload");
// //     const exportJsonButton = document.getElementById("export-json");
// //     const exportAllButton = document.getElementById("export-all");
// //
// //     // Separate Uploads and Exports
// //     const cssUpload = document.getElementById("css-upload");
// //     const exportCssButton = document.getElementById("export-css");
// //
// //     const htmlUpload = document.getElementById("html-upload");
// //     const exportHtmlButton = document.getElementById("export-html");
// //
// //     const jsUpload = document.getElementById("js-upload");
// //     const exportJsButton = document.getElementById("export-js");
// //
// //     // Style Category Elements
// //     const colorSlider = document.getElementById("color-slider");
// //     const applyColorButton = document.getElementById("apply-color");
// //     const currentColorValue = document.querySelector(".style-category:nth-child(1) .current-value");
// //
// //     const backgroundColorSlider = document.getElementById("background-color-slider");
// //     const applyBackgroundColorButton = document.getElementById("apply-background-color");
// //     const currentBackgroundColorValue = document.querySelector(".style-category:nth-child(2) .current-value");
// //
// //     const borderColorSlider = document.getElementById("border-color-slider");
// //     const borderWidthSlider = document.getElementById("border-width-slider");
// //     const applyBorderButton = document.getElementById("apply-border");
// //     const currentBorderValue = document.querySelector(".style-category:nth-child(3) .current-value");
// //
// //     const fontSizeSlider = document.getElementById("font-size-slider");
// //     const applyFontSizeButton = document.getElementById("apply-font-size");
// //     const currentFontSizeValue = document.querySelector(".style-category:nth-child(4) .current-value");
// //
// //     const scaleSlider = document.getElementById("scale-slider");
// //     const applyScaleButton = document.getElementById("apply-scale");
// //     const currentScaleValue = document.querySelector(".style-category:nth-child(5) .current-value");
// //
// //     const zIndexInput = document.getElementById("z-index-input");
// //     const applyZIndexButton = document.getElementById("apply-z-index");
// //     const currentZIndexValue = document.querySelector(".style-category:nth-child(6) .current-value");
// //
// //     const opacitySlider = document.getElementById("opacity-slider");
// //     const applyOpacityButton = document.getElementById("apply-opacity");
// //     const currentOpacityValue = document.querySelector(".style-category:nth-child(7) .current-value");
// //
// //     // Animation Controls
// //     const animationNameInput = document.getElementById("animation-name");
// //     const animationDurationInput = document.getElementById("animation-duration");
// //     const animationIterationInput = document.getElementById("animation-iteration");
// //     const animationTimingSelect = document.getElementById("animation-timing");
// //     const addAnimationButton = document.getElementById("add-animation");
// //
// //     // Code Sections
// //     const cssCodeTextarea = document.getElementById("css-code");
// //     const htmlCodeTextarea = document.getElementById("html-code");
// //     const jsCodeTextarea = document.getElementById("js-code");
// //     const applyCssButton = document.getElementById("apply-css");
// //     const applyHtmlButton = document.getElementById("apply-html");
// //     const applyJsButton = document.getElementById("apply-js");
// //
// //     // Toastr Configuration
// //     toastr.options = {
// //         "closeButton": true,
// //         "debug": false,
// //         "newestOnTop": true,
// //         "progressBar": true,
// //         "positionClass": "toast-top-right",
// //         "preventDuplicates": false,
// //         "onclick": null,
// //         "showDuration": "300",
// //         "hideDuration": "1000",
// //         "timeOut": "3000",
// //         "extendedTimeOut": "1000",
// //         "showEasing": "swing",
// //         "hideEasing": "linear",
// //         "showMethod": "fadeIn",
// //         "hideMethod": "fadeOut"
// //     };
// //
// //     // Initialize CodeMirror Editors
// //     const cssCode = CodeMirror.fromTextArea(cssCodeTextarea, {
// //         mode: "css",
// //         theme: "eclipse",
// //         lineNumbers: true,
// //         autoCloseBrackets: true,
// //         matchBrackets: true
// //     });
// //
// //     const htmlCode = CodeMirror.fromTextArea(htmlCodeTextarea, {
// //         mode: "htmlmixed",
// //         theme: "eclipse",
// //         lineNumbers: true,
// //         autoCloseBrackets: true,
// //         matchBrackets: true
// //     });
// //
// //     const jsCode = CodeMirror.fromTextArea(jsCodeTextarea, {
// //         mode: "javascript",
// //         theme: "eclipse",
// //         lineNumbers: true,
// //         autoCloseBrackets: true,
// //         matchBrackets: true
// //     });
// //
// //     // Initialize Codes, load from localStorage if available
// //     let savedCSS = localStorage.getItem('cssCode') || '';
// //     let savedHTML = localStorage.getItem('htmlCode') || '';
// //     let savedJS = localStorage.getItem('jsCode') || '';
// //
// //     cssCode.setValue(savedCSS);
// //     htmlCode.setValue(savedHTML);
// //     jsCode.setValue(savedJS);
// //
// //     // Function to update the preview iframe
// //     function updatePreview() {
// //         const css = cssCode.getValue();
// //         const html = htmlCode.getValue();
// //         const js = jsCode.getValue();
// //
// //         const previewDocument = `
// //             <!DOCTYPE html>
// //             <html lang="en">
// //             <head.ejs>
// //                 <style>
// //                     ${css}
// //                 </style>
// //             </head.ejs>
// //             <body>
// //                 ${html}
// //                 <script>
// //                     ${js}
// //                 </script>
// //             </body>
// //             </html>
// //         `;
// //
// //         const blob = new Blob([previewDocument], { type: 'text/html' });
// //         const url = URL.createObjectURL(blob);
// //         previewFrame.src = url;
// //
// //         // Clean up the URL object after the iframe has loaded
// //         previewFrame.onload = function() {
// //             URL.revokeObjectURL(url);
// //         };
// //     }
// //
// //     // Initial Preview Update
// //     updatePreview();
// //
// //     // Function to save codes to localStorage
// //     function saveCodes() {
// //         localStorage.setItem('cssCode', cssCode.getValue());
// //         localStorage.setItem('htmlCode', htmlCode.getValue());
// //         localStorage.setItem('jsCode', jsCode.getValue());
// //         toastr.success("Changes saved successfully!");
// //     }
// //
// //     // Event listeners for CodeMirror editors
// //     [cssCode, htmlCode, jsCode].forEach(editor => {
// //         editor.on('change', function() {
// //             updatePreview();
// //             saveCodes();
// //         });
// //     });
// //
// //     // StyleMap Initialization
// //     let styleMap = {
// //         "vs-text-slate-500": "color: #64748b;",
// //         "vs-bg-yellow-200": "background-color: #fef08a;",
// //         // Add more predefined styles here
// //     };
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
// //     // Initial Command Display
// //     displayCommands();
// //
// //     // Function to apply styles to the preview
// //     function applyStyle(command, style) {
// //         if (style) {
// //             // Apply the style to the preview iframe's body
// //             previewFrame.contentWindow.document.body.style.cssText += style;
// //             toastr.success(`Applied: ${command}`);
// //         } else {
// //             toastr.warning("Command not recognized. Please check the available commands.");
// //         }
// //     }
// //
// //     // Apply Command via Input
// //     submitCommand.addEventListener("click", function() {
// //         const command = cssInput.value.trim();
// //         if (command !== "") {
// //             const style = styleMap[command];
// //             if (style) {
// //                 cssCode.replaceRange(`\n${style}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //                 updatePreview();
// //                 saveCodes();
// //                 toastr.success(`Applied: ${command}`);
// //                 cssInput.value = "";
// //             } else {
// //                 toastr.warning("Command not recognized. Please check the available commands.");
// //             }
// //         } else {
// //             toastr.warning("Please enter a CSS command to apply.");
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
// //     // Function to handle JSON import
// //     function importJSON(data) {
// //         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
// //             toastr.error("Invalid JSON structure. It should be an object with vs-* commands as keys.");
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
// //             toastr.success(`Imported ${newCommands.length} new command(s) successfully!`);
// //             displayCommands();
// //         } else {
// //             toastr.warning("No valid commands were imported.");
// //         }
// //
// //         console.log("Updated styleMap:", styleMap);
// //     }
// //
// //     // Event listener for JSON upload
// //     jsonUpload.addEventListener("change", function(event) {
// //         const file = event.target.files[0];
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onload = function(e) {
// //                 try {
// //                     const jsonData = JSON.parse(e.target.result);
// //                     importJSON(jsonData);
// //                 } catch (error) {
// //                     toastr.error("Invalid JSON file. Please upload a correctly formatted JSON.");
// //                     console.error("JSON Parsing Error:", error);
// //                 }
// //             };
// //             reader.readAsText(file);
// //             // Reset the file input value to allow uploading the same file again if needed
// //             event.target.value = "";
// //         }
// //     });
// //
// //     // Function to export current codes as JSON
// //     function exportJSON() {
// //         const data = {
// //             css: cssCode.getValue(),
// //             html: htmlCode.getValue(),
// //             js: jsCode.getValue()
// //         };
// //
// //         const dataStr = JSON.stringify(data, null, 2);
// //         const blob = new Blob([dataStr], { type: "application/json" });
// //         const url = URL.createObjectURL(blob);
// //
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = 'fraymz_profile.json';
// //         a.click();
// //
// //         URL.revokeObjectURL(url);
// //         toastr.success("CSS profile exported successfully!");
// //     }
// //
// //     // Event listener for export JSON button
// //     exportJsonButton.addEventListener("click", exportJSON);
// //
// //     // Function to export separate files
// //     function handleFileExport(content, type) {
// //         let mimeType;
// //         let fileName;
// //         switch(type) {
// //             case 'css':
// //                 mimeType = "text/css";
// //                 fileName = "styles.css";
// //                 break;
// //             case 'html':
// //                 mimeType = "text/html";
// //                 fileName = "index.html";
// //                 break;
// //             case 'js':
// //                 mimeType = "application/javascript";
// //                 fileName = "script.js";
// //                 break;
// //             default:
// //                 toastr.error("Unknown file type for export.");
// //                 return;
// //         }
// //
// //         const blob = new Blob([content], { type: mimeType });
// //         const url = URL.createObjectURL(blob);
// //
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = fileName;
// //         a.click();
// //
// //         URL.revokeObjectURL(url);
// //         toastr.success(`${type.toUpperCase()} exported successfully!`);
// //     }
// //
// //     // Event Listeners for Separate File Exports
// //     exportCssButton.addEventListener("click", function() {
// //         const cssData = cssCode.getValue();
// //         handleFileExport(cssData, 'css');
// //     });
// //
// //     exportHtmlButton.addEventListener("click", function() {
// //         const htmlData = htmlCode.getValue();
// //         handleFileExport(htmlData, 'html');
// //     });
// //
// //     exportJsButton.addEventListener("click", function() {
// //         const jsData = jsCode.getValue();
// //         handleFileExport(jsData, 'js');
// //     });
// //
// //     // Function to export all codes as combined HTML
// //     function exportAllAsHTML() {
// //         const css = cssCode.getValue();
// //         const html = htmlCode.getValue();
// //         const js = jsCode.getValue();
// //
// //         const combinedHTML = `
// // <!DOCTYPE html>
// // <html lang="en">
// // <head.ejs>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Fraymz - Combined Output</title>
// //     <style>
// //         ${css}
// //     </style>
// // </head.ejs>
// // <body>
// //     ${html}
// //     <script>
// //         ${js}
// //     </script>
// // </body>
// // </html>
// //         `;
// //
// //         const blob = new Blob([combinedHTML], { type: "text/html" });
// //         const url = URL.createObjectURL(blob);
// //
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = 'combined_output.html';
// //         a.click();
// //
// //         URL.revokeObjectURL(url);
// //         toastr.success("All files exported as combined HTML successfully!");
// //     }
// //
// //     // Event Listener for Export All Button
// //     exportAllButton.addEventListener("click", exportAllAsHTML);
// //
// //     // Function to handle uploading separate CSS, HTML, JS files
// //     function handleFileUpload(inputElement, type) {
// //         const file = inputElement.files[0];
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onload = function(e) {
// //                 const content = e.target.result;
// //                 switch(type) {
// //                     case 'css':
// //                         cssCode.setValue(content);
// //                         toastr.success("CSS file uploaded successfully!");
// //                         break;
// //                     case 'html':
// //                         htmlCode.setValue(content);
// //                         toastr.success("HTML file uploaded successfully!");
// //                         break;
// //                     case 'js':
// //                         jsCode.setValue(content);
// //                         toastr.success("JavaScript file uploaded successfully!");
// //                         break;
// //                     default:
// //                         toastr.error("Unknown file type.");
// //                 }
// //                 updatePreview();
// //                 saveCodes();
// //             };
// //             reader.readAsText(file);
// //         }
// //     }
// //
// //     // Event Listeners for Separate File Uploads
// //     cssUpload.addEventListener("change", function() {
// //         handleFileUpload(cssUpload, 'css');
// //         // Reset the file input value to allow uploading the same file again if needed
// //         cssUpload.value = "";
// //     });
// //
// //     htmlUpload.addEventListener("change", function() {
// //         handleFileUpload(htmlUpload, 'html');
// //         htmlUpload.value = "";
// //     });
// //
// //     jsUpload.addEventListener("change", function() {
// //         handleFileUpload(jsUpload, 'js');
// //         jsUpload.value = "";
// //     });
// //
// //     // Function to apply styles to the preview
// //     function applyStyleToPreview(style) {
// //         const previewDoc = previewFrame.contentWindow.document;
// //         previewDoc.body.style.cssText += style;
// //     }
// //
// //     // Event Listeners for Style Categories
// //
// //     // 1. Color
// //     applyColorButton.addEventListener("click", function() {
// //         const color = colorSlider.value;
// //         const style = `color: ${color};`;
// //         applyStyleToPreview(style);
// //         currentColorValue.textContent = `Current Color: ${color}`;
// //         cssCode.replaceRange(`\ncolor: ${color};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Color: ${color}`);
// //     });
// //
// //     // 2. Background Color
// //     applyBackgroundColorButton.addEventListener("click", function() {
// //         const bgColor = backgroundColorSlider.value;
// //         const style = `background-color: ${bgColor};`;
// //         applyStyleToPreview(style);
// //         currentBackgroundColorValue.textContent = `Current Background Color: ${bgColor}`;
// //         cssCode.replaceRange(`\nbackground-color: ${bgColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Background Color: ${bgColor}`);
// //     });
// //
// //     // 3. Border
// //     applyBorderButton.addEventListener("click", function() {
// //         const borderColor = borderColorSlider.value;
// //         const borderWidth = borderWidthSlider.value;
// //         const style = `border: ${borderWidth}px solid ${borderColor};`;
// //         applyStyleToPreview(style);
// //         currentBorderValue.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
// //         cssCode.replaceRange(`\nborder: ${borderWidth}px solid ${borderColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Border: ${borderWidth}px solid ${borderColor}`);
// //     });
// //
// //     // 4. Font Size
// //     applyFontSizeButton.addEventListener("click", function() {
// //         const fontSize = fontSizeSlider.value;
// //         const style = `font-size: ${fontSize}px;`;
// //         applyStyleToPreview(style);
// //         currentFontSizeValue.textContent = `Current Font Size: ${fontSize}px`;
// //         cssCode.replaceRange(`\nfont-size: ${fontSize}px;`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Font Size: ${fontSize}px`);
// //     });
// //
// //     // 5. Scale
// //     applyScaleButton.addEventListener("click", function() {
// //         const scale = scaleSlider.value;
// //         const style = `transform: scale(${scale});`;
// //         applyStyleToPreview(style);
// //         currentScaleValue.textContent = `Current Scale: ${scale}`;
// //         cssCode.replaceRange(`\ntransform: scale(${scale});`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Scale: ${scale}`);
// //     });
// //
// //     // 6. Z-Index
// //     applyZIndexButton.addEventListener("click", function() {
// //         const zIndex = zIndexInput.value;
// //         const style = `z-index: ${zIndex};`;
// //         applyStyleToPreview(style);
// //         currentZIndexValue.textContent = `Current Z-Index: ${zIndex}`;
// //         cssCode.replaceRange(`\nz-index: ${zIndex};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Z-Index: ${zIndex}`);
// //     });
// //
// //     // 7. Opacity
// //     applyOpacityButton.addEventListener("click", function() {
// //         const opacity = opacitySlider.value;
// //         const style = `opacity: ${opacity};`;
// //         applyStyleToPreview(style);
// //         currentOpacityValue.textContent = `Current Opacity: ${opacity}`;
// //         cssCode.replaceRange(`\nopacity: ${opacity};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Applied Opacity: ${opacity}`);
// //     });
// //
// //     // Animation Controls
// //     addAnimationButton.addEventListener("click", function() {
// //         const name = animationNameInput.value.trim();
// //         const duration = animationDurationInput.value.trim();
// //         const iteration = animationIterationInput.value.trim();
// //         const timing = animationTimingSelect.value;
// //
// //         if (name === "" || duration === "" || iteration === "") {
// //             toastr.warning("Please fill in all animation fields.");
// //             return;
// //         }
// //
// //         // Create keyframes if not already defined
// //         const keyframesName = name;
// //         const keyframes = `
// // @keyframes ${keyframesName} {
// //     from { opacity: 0; }
// //     to { opacity: 1; }
// // }
// //         `;
// //         cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //
// //         // Append animation property to CSS code area
// //         const animationProperty = `
// // animation: ${keyframesName} ${duration}s ${timing} ${iteration};
// //         `;
// //         cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
// //         updatePreview();
// //         saveCodes();
// //         toastr.success(`Added animation: ${animationProperty.trim()}`);
// //
// //         // Clear animation input fields
// //         animationNameInput.value = "";
// //         animationDurationInput.value = "";
// //         animationIterationInput.value = "";
// //         animationTimingSelect.value = "linear";
// //     });
// //
// //     // Function to handle uploading separate CSS, HTML, JS files
// //     function handleFileUpload(inputElement, type) {
// //         const file = inputElement.files[0];
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onload = function(e) {
// //                 const content = e.target.result;
// //                 switch(type) {
// //                     case 'css':
// //                         cssCode.setValue(content);
// //                         toastr.success("CSS file uploaded successfully!");
// //                         break;
// //                     case 'html':
// //                         htmlCode.setValue(content);
// //                         toastr.success("HTML file uploaded successfully!");
// //                         break;
// //                     case 'js':
// //                         jsCode.setValue(content);
// //                         toastr.success("JavaScript file uploaded successfully!");
// //                         break;
// //                     default:
// //                         toastr.error("Unknown file type.");
// //                 }
// //                 updatePreview();
// //                 saveCodes();
// //             };
// //             reader.readAsText(file);
// //         }
// //     }
// //
// //     // Event Listeners for Separate File Uploads
// //     cssUpload.addEventListener("change", function() {
// //         handleFileUpload(cssUpload, 'css');
// //         // Reset the file input value to allow uploading the same file again if needed
// //         cssUpload.value = "";
// //     });
// //
// //     htmlUpload.addEventListener("change", function() {
// //         handleFileUpload(htmlUpload, 'html');
// //         htmlUpload.value = "";
// //     });
// //
// //     jsUpload.addEventListener("change", function() {
// //         handleFileUpload(jsUpload, 'js');
// //         jsUpload.value = "";
// //     });
// //
// //     // Function to export separate files
// //     function handleFileExport(content, type) {
// //         let mimeType;
// //         let fileName;
// //         switch(type) {
// //             case 'css':
// //                 mimeType = "text/css";
// //                 fileName = "styles.css";
// //                 break;
// //             case 'html':
// //                 mimeType = "text/html";
// //                 fileName = "index.html";
// //                 break;
// //             case 'js':
// //                 mimeType = "application/javascript";
// //                 fileName = "script.js";
// //                 break;
// //             default:
// //                 toastr.error("Unknown file type for export.");
// //                 return;
// //         }
// //
// //         const blob = new Blob([content], { type: mimeType });
// //         const url = URL.createObjectURL(blob);
// //
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = fileName;
// //         a.click();
// //
// //         URL.revokeObjectURL(url);
// //         toastr.success(`${type.toUpperCase()} exported successfully!`);
// //     }
// //
// //     // Event Listeners for Separate File Exports
// //     exportCssButton.addEventListener("click", function() {
// //         const cssData = cssCode.getValue();
// //         handleFileExport(cssData, 'css');
// //     });
// //
// //     exportHtmlButton.addEventListener("click", function() {
// //         const htmlData = htmlCode.getValue();
// //         handleFileExport(htmlData, 'html');
// //     });
// //
// //     exportJsButton.addEventListener("click", function() {
// //         const jsData = jsCode.getValue();
// //         handleFileExport(jsData, 'js');
// //     });
// //
// //     // Function to export all codes as combined HTML
// //     function exportAllAsHTML() {
// //         const css = cssCode.getValue();
// //         const html = htmlCode.getValue();
// //         const js = jsCode.getValue();
// //
// //         const combinedHTML = `
// // <!DOCTYPE html>
// // <html lang="en">
// // <head.ejs>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Fraymz - Combined Output</title>
// //     <style>
// //         ${css}
// //     </style>
// // </head.ejs>
// // <body>
// //     ${html}
// //     <script>
// //         ${js}
// //     </script>
// // </body>
// // </html>
// //         `;
// //
// //         const blob = new Blob([combinedHTML], { type: "text/html" });
// //         const url = URL.createObjectURL(blob);
// //
// //         const a = document.createElement('a');
// //         a.href = url;
// //         a.download = 'combined_output.html';
// //         a.click();
// //
// //         URL.revokeObjectURL(url);
// //         toastr.success("All files exported as combined HTML successfully!");
// //     }
// //
// //     // Event Listener for Export All Button
// //     exportAllButton.addEventListener("click", exportAllAsHTML);
// // });
//
// // editor.js
// // editor.js
//
// document.addEventListener("DOMContentLoaded", function() {
//     // DOM Elements
//     const cssInput = document.getElementById("css-input");
//     const submitCommand = document.getElementById("submit-command");
//     const previewFrame = document.getElementById("preview-frame");
//     const commandSuggestions = document.getElementById("command-suggestions");
//     const jsonUpload = document.getElementById("json-upload");
//     const exportJsonButton = document.getElementById("export-json");
//     const exportAllButton = document.getElementById("export-all");
//
//     // Separate Uploads and Exports
//     const cssUpload = document.getElementById("css-upload");
//     const exportCssButton = document.getElementById("export-css");
//
//     const htmlUpload = document.getElementById("html-upload");
//     const exportHtmlButton = document.getElementById("export-html");
//
//     const jsUpload = document.getElementById("js-upload");
//     const exportJsButton = document.getElementById("export-js");
//
//     // Style Category Elements
//     const colorSlider = document.getElementById("color-slider");
//     const applyColorButton = document.getElementById("apply-color");
//     const currentColorValue = document.querySelector(".style-category:nth-child(1) .current-value");
//
//     const backgroundColorSlider = document.getElementById("background-color-slider");
//     const applyBackgroundColorButton = document.getElementById("apply-background-color");
//     const currentBackgroundColorValue = document.querySelector(".style-category:nth-child(2) .current-value");
//
//     const borderColorSlider = document.getElementById("border-color-slider");
//     const borderWidthSlider = document.getElementById("border-width-slider");
//     const applyBorderButton = document.getElementById("apply-border");
//     const currentBorderValue = document.querySelector(".style-category:nth-child(3) .current-value");
//
//     const fontSizeSlider = document.getElementById("font-size-slider");
//     const applyFontSizeButton = document.getElementById("apply-font-size");
//     const currentFontSizeValue = document.querySelector(".style-category:nth-child(4) .current-value");
//
//     const scaleSlider = document.getElementById("scale-slider");
//     const applyScaleButton = document.getElementById("apply-scale");
//     const currentScaleValue = document.querySelector(".style-category:nth-child(5) .current-value");
//
//     const zIndexInput = document.getElementById("z-index-input");
//     const applyZIndexButton = document.getElementById("apply-z-index");
//     const currentZIndexValue = document.querySelector(".style-category:nth-child(6) .current-value");
//
//     const opacitySlider = document.getElementById("opacity-slider");
//     const applyOpacityButton = document.getElementById("apply-opacity");
//     const currentOpacityValue = document.querySelector(".style-category:nth-child(7) .current-value");
//
//     // Animation Controls
//     const animationNameInput = document.getElementById("animation-name");
//     const animationDurationInput = document.getElementById("animation-duration");
//     const animationIterationInput = document.getElementById("animation-iteration");
//     const animationTimingSelect = document.getElementById("animation-timing");
//     const addAnimationButton = document.getElementById("add-animation");
//
//     // Code Sections
//     const cssCodeTextarea = document.getElementById("css-code");
//     const htmlCodeTextarea = document.getElementById("html-code");
//     const jsCodeTextarea = document.getElementById("js-code");
//     const applyCssButton = document.getElementById("apply-css");
//     const applyHtmlButton = document.getElementById("apply-html");
//     const applyJsButton = document.getElementById("apply-js");
//
//     // Toastr Configuration
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
//     // Initialize CodeMirror Editors
//     const cssCode = CodeMirror.fromTextArea(cssCodeTextarea, {
//         mode: "css",
//         theme: "eclipse",
//         lineNumbers: true,
//         autoCloseBrackets: true,
//         matchBrackets: true
//     });
//
//     const htmlCode = CodeMirror.fromTextArea(htmlCodeTextarea, {
//         mode: "htmlmixed",
//         theme: "eclipse",
//         lineNumbers: true,
//         autoCloseBrackets: true,
//         matchBrackets: true
//     });
//
//     const jsCode = CodeMirror.fromTextArea(jsCodeTextarea, {
//         mode: "javascript",
//         theme: "eclipse",
//         lineNumbers: true,
//         autoCloseBrackets: true,
//         matchBrackets: true
//     });
//
//     // Initialize Codes, load from localStorage if available
//     let savedCSS = localStorage.getItem('cssCode') || '';
//     let savedHTML = localStorage.getItem('htmlCode') || '';
//     let savedJS = localStorage.getItem('jsCode') || '';
//
//     cssCode.setValue(savedCSS);
//     htmlCode.setValue(savedHTML);
//     jsCode.setValue(savedJS);
//
//     // Function to update the preview iframe
//     function updatePreview() {
//         const css = cssCode.getValue();
//         const html = htmlCode.getValue();
//         const js = jsCode.getValue();
//
//         const previewDocument = `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head.ejs>
//                 <style>
//                     ${css}
//                 </style>
//             </head.ejs>
//             <body>
//                 ${html}
//                 <script>
//                     ${js}
//                 </script>
//             </body>
//             </html>
//         `;
//
//         const blob = new Blob([previewDocument], { type: 'text/html' });
//         const url = URL.createObjectURL(blob);
//         previewFrame.src = url;
//
//         // Clean up the URL object after the iframe has loaded
//         previewFrame.onload = function() {
//             URL.revokeObjectURL(url);
//         };
//     }
//
//     // Initial Preview Update
//     updatePreview();
//
//     // Function to save codes to localStorage
//     function saveCodes() {
//         localStorage.setItem('cssCode', cssCode.getValue());
//         localStorage.setItem('htmlCode', htmlCode.getValue());
//         localStorage.setItem('jsCode', jsCode.getValue());
//         toastr.success("Changes saved successfully!");
//     }
//
//     // Event listeners for CodeMirror editors
//     [cssCode, htmlCode, jsCode].forEach(editor => {
//         editor.on('change', function() {
//             updatePreview();
//             saveCodes();
//         });
//     });
//
//     // StyleMap Initialization
//     let styleMap = {
//         "vs-text-slate-500": "color: #64748b;",
//         "vs-bg-yellow-200": "background-color: #fef08a;",
//         // Add more predefined styles here
//     };
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
//     // Initial Command Display
//     displayCommands();
//
//     // Function to apply styles to the preview
//     function applyStyle(command, style) {
//         if (style) {
//             // Apply the style to the preview iframe's body
//             previewFrame.contentWindow.document.body.style.cssText += style;
//             toastr.success(`Applied: ${command}`);
//         } else {
//             toastr.warning("Command not recognized. Please check the available commands.");
//         }
//     }
//
//     // Apply Command via Input
//     submitCommand.addEventListener("click", function() {
//         const command = cssInput.value.trim();
//         if (command !== "") {
//             const style = styleMap[command];
//             if (style) {
//                 cssCode.replaceRange(`\n${style}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//                 updatePreview();
//                 saveCodes();
//                 toastr.success(`Applied: ${command}`);
//                 cssInput.value = "";
//             } else {
//                 toastr.warning("Command not recognized. Please check the available commands.");
//             }
//         } else {
//             toastr.warning("Please enter a CSS command to apply.");
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
//     // Function to handle JSON import
//     function importJSON(data) {
//         if (typeof data !== 'object' || Array.isArray(data) || data === null) {
//             toastr.error("Invalid JSON structure. It should be an object with vs-* commands as keys.");
//             return;
//         }
//
//         let newCommands = [];
//         // Iterate over each command in JSON and update styleMap
//         for (const [command, style] of Object.entries(data)) {
//             if (typeof command === 'string' && typeof style === 'string') {
//                 if (command.startsWith('vs-')) {
//                     styleMap[command] = style;
//                     newCommands.push(command);
//                 } else {
//                     console.warn(`Command "${command}" does not start with "vs-". Skipping.`);
//                 }
//             } else {
//                 console.warn(`Invalid command or style format for "${command}". Skipping.`);
//             }
//         }
//
//         if (newCommands.length > 0) {
//             toastr.success(`Imported ${newCommands.length} new command(s) successfully!`);
//             displayCommands();
//         } else {
//             toastr.warning("No valid commands were imported.");
//         }
//
//         console.log("Updated styleMap:", styleMap);
//     }
//
//     // Event listener for JSON upload
//     jsonUpload.addEventListener("change", function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 try {
//                     const jsonData = JSON.parse(e.target.result);
//                     importJSON(jsonData);
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
//     // Function to export current codes as JSON
//     function exportJSONFunction() {
//         const data = {
//             css: cssCode.getValue(),
//             html: htmlCode.getValue(),
//             js: jsCode.getValue()
//         };
//
//         const dataStr = JSON.stringify(data, null, 2);
//         const blob = new Blob([dataStr], { type: "application/json" });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'fraymz_profile.json';
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success("CSS profile exported successfully!");
//     }
//
//     // Event listener for export JSON button
//     exportJsonButton.addEventListener("click", exportJSONFunction);
//
//     // Function to export separate files
//     function handleFileExport(content, type) {
//         let mimeType;
//         let fileName;
//         switch(type) {
//             case 'css':
//                 mimeType = "text/css";
//                 fileName = "styles.css";
//                 break;
//             case 'html':
//                 mimeType = "text/html";
//                 fileName = "index.html";
//                 break;
//             case 'js':
//                 mimeType = "application/javascript";
//                 fileName = "script.js";
//                 break;
//             default:
//                 toastr.error("Unknown file type for export.");
//                 return;
//         }
//
//         const blob = new Blob([content], { type: mimeType });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = fileName;
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success(`${type.toUpperCase()} exported successfully!`);
//     }
//
//     // Event Listeners for Separate File Exports
//     exportCssButton.addEventListener("click", function() {
//         const cssData = cssCode.getValue();
//         handleFileExport(cssData, 'css');
//     });
//
//     exportHtmlButton.addEventListener("click", function() {
//         const htmlData = htmlCode.getValue();
//         handleFileExport(htmlData, 'html');
//     });
//
//     exportJsButton.addEventListener("click", function() {
//         const jsData = jsCode.getValue();
//         handleFileExport(jsData, 'js');
//     });
//
//     // Function to export all codes as combined HTML
//     function exportAllAsHTML() {
//         const css = cssCode.getValue();
//         const html = htmlCode.getValue();
//         const js = jsCode.getValue();
//
//         const combinedHTML = `
// <!DOCTYPE html>
// <html lang="en">
// <head.ejs>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Fraymz - Combined Output</title>
//     <style>
//         ${css}
//     </style>
// </head.ejs>
// <body>
//     ${html}
//     <script>
//         ${js}
//     </script>
// </body>
// </html>
//         `;
//
//         const blob = new Blob([combinedHTML], { type: "text/html" });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'combined_output.html';
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success("All files exported as combined HTML successfully!");
//     }
//
//     // Event Listener for Export All Button
//     exportAllButton.addEventListener("click", exportAllAsHTML);
//
//     // Function to handle uploading separate CSS, HTML, JS files
//     function handleFileUpload(inputElement, type) {
//         const file = inputElement.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const content = e.target.result;
//                 switch(type) {
//                     case 'css':
//                         cssCode.setValue(content);
//                         toastr.success("CSS file uploaded successfully!");
//                         break;
//                     case 'html':
//                         htmlCode.setValue(content);
//                         toastr.success("HTML file uploaded successfully!");
//                         break;
//                     case 'js':
//                         jsCode.setValue(content);
//                         toastr.success("JavaScript file uploaded successfully!");
//                         break;
//                     default:
//                         toastr.error("Unknown file type.");
//                 }
//                 updatePreview();
//                 saveCodes();
//             };
//             reader.readAsText(file);
//         }
//     }
//
//     // Event Listeners for Separate File Uploads
//     cssUpload.addEventListener("change", function() {
//         handleFileUpload(cssUpload, 'css');
//         // Reset the file input value to allow uploading the same file again if needed
//         cssUpload.value = "";
//     });
//
//     htmlUpload.addEventListener("change", function() {
//         handleFileUpload(htmlUpload, 'html');
//         htmlUpload.value = "";
//     });
//
//     jsUpload.addEventListener("change", function() {
//         handleFileUpload(jsUpload, 'js');
//         jsUpload.value = "";
//     });
//
//     // Function to apply styles to the preview
//     function applyStyleToPreview(style) {
//         const previewDoc = previewFrame.contentWindow.document;
//         previewDoc.body.style.cssText += style;
//     }
//
//     // Event Listeners for Style Categories
//
//     // 1. Color
//     applyColorButton.addEventListener("click", function() {
//         const color = colorSlider.value;
//         const style = `color: ${color};`;
//         applyStyleToPreview(style);
//         currentColorValue.textContent = `Current Color: ${color}`;
//         cssCode.replaceRange(`\ncolor: ${color};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Color: ${color}`);
//     });
//
//     // 2. Background Color
//     applyBackgroundColorButton.addEventListener("click", function() {
//         const bgColor = backgroundColorSlider.value;
//         const style = `background-color: ${bgColor};`;
//         applyStyleToPreview(style);
//         currentBackgroundColorValue.textContent = `Current Background Color: ${bgColor}`;
//         cssCode.replaceRange(`\nbackground-color: ${bgColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Background Color: ${bgColor}`);
//     });
//
//     // 3. Border
//     applyBorderButton.addEventListener("click", function() {
//         const borderColor = borderColorSlider.value;
//         const borderWidth = borderWidthSlider.value;
//         const style = `border: ${borderWidth}px solid ${borderColor};`;
//         applyStyleToPreview(style);
//         currentBorderValue.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
//         cssCode.replaceRange(`\nborder: ${borderWidth}px solid ${borderColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Border: ${borderWidth}px solid ${borderColor}`);
//     });
//
//     // 4. Font Size
//     applyFontSizeButton.addEventListener("click", function() {
//         const fontSize = fontSizeSlider.value;
//         const style = `font-size: ${fontSize}px;`;
//         applyStyleToPreview(style);
//         currentFontSizeValue.textContent = `Current Font Size: ${fontSize}px`;
//         cssCode.replaceRange(`\nfont-size: ${fontSize}px;`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Font Size: ${fontSize}px`);
//     });
//
//     // 5. Scale
//     applyScaleButton.addEventListener("click", function() {
//         const scale = scaleSlider.value;
//         const style = `transform: scale(${scale});`;
//         applyStyleToPreview(style);
//         currentScaleValue.textContent = `Current Scale: ${scale}`;
//         cssCode.replaceRange(`\ntransform: scale(${scale});`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Scale: ${scale}`);
//     });
//
//     // 6. Z-Index
//     applyZIndexButton.addEventListener("click", function() {
//         const zIndex = zIndexInput.value;
//         const style = `z-index: ${zIndex};`;
//         applyStyleToPreview(style);
//         currentZIndexValue.textContent = `Current Z-Index: ${zIndex}`;
//         cssCode.replaceRange(`\nz-index: ${zIndex};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Z-Index: ${zIndex}`);
//     });
//
//     // 7. Opacity
//     applyOpacityButton.addEventListener("click", function() {
//         const opacity = opacitySlider.value;
//         const style = `opacity: ${opacity};`;
//         applyStyleToPreview(style);
//         currentOpacityValue.textContent = `Current Opacity: ${opacity}`;
//         cssCode.replaceRange(`\nopacity: ${opacity};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Opacity: ${opacity}`);
//     });
//
//     // Animation Controls
//     addAnimationButton.addEventListener("click", function() {
//         const name = animationNameInput.value.trim();
//         const duration = animationDurationInput.value.trim();
//         const iteration = animationIterationInput.value.trim();
//         const timing = animationTimingSelect.value;
//
//         if (name === "" || duration === "" || iteration === "") {
//             toastr.warning("Please fill in all animation fields.");
//             return;
//         }
//
//         // Create keyframes if not already defined
//         const keyframesName = name;
//         const keyframes = `
// @keyframes ${keyframesName} {
//     from { opacity: 0; }
//     to { opacity: 1; }
// }
//         `;
//         cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//
//         // Append animation property to CSS code area
//         const animationProperty = `
// animation: ${keyframesName} ${duration}s ${timing} ${iteration};
//         `;
//         cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Added animation: ${animationProperty.trim()}`);
//
//         // Clear animation input fields
//         animationNameInput.value = "";
//         animationDurationInput.value = "";
//         animationIterationInput.value = "";
//         animationTimingSelect.value = "linear";
//     });
//
//     // Function to handle uploading separate CSS, HTML, JS files
//     function handleFileUpload(inputElement, type) {
//         const file = inputElement.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const content = e.target.result;
//                 switch(type) {
//                     case 'css':
//                         cssCode.setValue(content);
//                         toastr.success("CSS file uploaded successfully!");
//                         break;
//                     case 'html':
//                         htmlCode.setValue(content);
//                         toastr.success("HTML file uploaded successfully!");
//                         break;
//                     case 'js':
//                         jsCode.setValue(content);
//                         toastr.success("JavaScript file uploaded successfully!");
//                         break;
//                     default:
//                         toastr.error("Unknown file type.");
//                 }
//                 updatePreview();
//                 saveCodes();
//             };
//             reader.readAsText(file);
//         }
//     }
//
//     // Event Listeners for Separate File Uploads
//     cssUpload.addEventListener("change", function() {
//         handleFileUpload(cssUpload, 'css');
//         // Reset the file input value to allow uploading the same file again if needed
//         cssUpload.value = "";
//     });
//
//     htmlUpload.addEventListener("change", function() {
//         handleFileUpload(htmlUpload, 'html');
//         htmlUpload.value = "";
//     });
//
//     jsUpload.addEventListener("change", function() {
//         handleFileUpload(jsUpload, 'js');
//         jsUpload.value = "";
//     });
//
//     // Function to export separate files
//     function handleFileExport(content, type) {
//         let mimeType;
//         let fileName;
//         switch(type) {
//             case 'css':
//                 mimeType = "text/css";
//                 fileName = "styles.css";
//                 break;
//             case 'html':
//                 mimeType = "text/html";
//                 fileName = "index.html";
//                 break;
//             case 'js':
//                 mimeType = "application/javascript";
//                 fileName = "script.js";
//                 break;
//             default:
//                 toastr.error("Unknown file type for export.");
//                 return;
//         }
//
//         const blob = new Blob([content], { type: mimeType });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = fileName;
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success(`${type.toUpperCase()} exported successfully!`);
//     }
//
//     // Event Listeners for Separate File Exports
//     exportCssButton.addEventListener("click", function() {
//         const cssData = cssCode.getValue();
//         handleFileExport(cssData, 'css');
//     });
//
//     exportHtmlButton.addEventListener("click", function() {
//         const htmlData = htmlCode.getValue();
//         handleFileExport(htmlData, 'html');
//     });
//
//     exportJsButton.addEventListener("click", function() {
//         const jsData = jsCode.getValue();
//         handleFileExport(jsData, 'js');
//     });
//
//     // Function to export all codes as combined HTML
//     function exportAllAsHTML() {
//         const css = cssCode.getValue();
//         const html = htmlCode.getValue();
//         const js = jsCode.getValue();
//
//         const combinedHTML = `
// <!DOCTYPE html>
// <html lang="en">
// <head.ejs>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Fraymz - Combined Output</title>
//     <style>
//         ${css}
//     </style>
// </head.ejs>
// <body>
//     ${html}
//     <script>
//         ${js}
//     </script>
// </body>
// </html>
//         `;
//
//         const blob = new Blob([combinedHTML], { type: "text/html" });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'combined_output.html';
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success("All files exported as combined HTML successfully!");
//     }
//
//     // Event Listener for Export All Button
//     exportAllButton.addEventListener("click", exportAllAsHTML);
//
//     // Function to apply styles to the preview
//     function applyStyleToPreview(style) {
//         const previewDoc = previewFrame.contentWindow.document;
//         previewDoc.body.style.cssText += style;
//     }
//
//     // Event Listeners for Style Categories
//
//     // 1. Color
//     applyColorButton.addEventListener("click", function() {
//         const color = colorSlider.value;
//         const style = `color: ${color};`;
//         applyStyleToPreview(style);
//         currentColorValue.textContent = `Current Color: ${color}`;
//         cssCode.replaceRange(`\ncolor: ${color};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Color: ${color}`);
//     });
//
//     // 2. Background Color
//     applyBackgroundColorButton.addEventListener("click", function() {
//         const bgColor = backgroundColorSlider.value;
//         const style = `background-color: ${bgColor};`;
//         applyStyleToPreview(style);
//         currentBackgroundColorValue.textContent = `Current Background Color: ${bgColor}`;
//         cssCode.replaceRange(`\nbackground-color: ${bgColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Background Color: ${bgColor}`);
//     });
//
//     // 3. Border
//     applyBorderButton.addEventListener("click", function() {
//         const borderColor = borderColorSlider.value;
//         const borderWidth = borderWidthSlider.value;
//         const style = `border: ${borderWidth}px solid ${borderColor};`;
//         applyStyleToPreview(style);
//         currentBorderValue.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
//         cssCode.replaceRange(`\nborder: ${borderWidth}px solid ${borderColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Border: ${borderWidth}px solid ${borderColor}`);
//     });
//
//     // 4. Font Size
//     applyFontSizeButton.addEventListener("click", function() {
//         const fontSize = fontSizeSlider.value;
//         const style = `font-size: ${fontSize}px;`;
//         applyStyleToPreview(style);
//         currentFontSizeValue.textContent = `Current Font Size: ${fontSize}px`;
//         cssCode.replaceRange(`\nfont-size: ${fontSize}px;`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Font Size: ${fontSize}px`);
//     });
//
//     // 5. Scale
//     applyScaleButton.addEventListener("click", function() {
//         const scale = scaleSlider.value;
//         const style = `transform: scale(${scale});`;
//         applyStyleToPreview(style);
//         currentScaleValue.textContent = `Current Scale: ${scale}`;
//         cssCode.replaceRange(`\ntransform: scale(${scale});`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Scale: ${scale}`);
//     });
//
//     // 6. Z-Index
//     applyZIndexButton.addEventListener("click", function() {
//         const zIndex = zIndexInput.value;
//         const style = `z-index: ${zIndex};`;
//         applyStyleToPreview(style);
//         currentZIndexValue.textContent = `Current Z-Index: ${zIndex}`;
//         cssCode.replaceRange(`\nz-index: ${zIndex};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Z-Index: ${zIndex}`);
//     });
//
//     // 7. Opacity
//     applyOpacityButton.addEventListener("click", function() {
//         const opacity = opacitySlider.value;
//         const style = `opacity: ${opacity};`;
//         applyStyleToPreview(style);
//         currentOpacityValue.textContent = `Current Opacity: ${opacity}`;
//         cssCode.replaceRange(`\nopacity: ${opacity};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Opacity: ${opacity}`);
//     });
//
//     // Animation Controls
//     addAnimationButton.addEventListener("click", function() {
//         const name = animationNameInput.value.trim();
//         const duration = animationDurationInput.value.trim();
//         const iteration = animationIterationInput.value.trim();
//         const timing = animationTimingSelect.value;
//
//         if (name === "" || duration === "" || iteration === "") {
//             toastr.warning("Please fill in all animation fields.");
//             return;
//         }
//
//         // Create keyframes if not already defined
//         const keyframesName = name;
//         const keyframes = `
// @keyframes ${keyframesName} {
//     from { opacity: 0; }
//     to { opacity: 1; }
// }
//         `;
//         cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//
//         // Append animation property to CSS code area
//         const animationProperty = `
// animation: ${keyframesName} ${duration}s ${timing} ${iteration};
//         `;
//         cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Added animation: ${animationProperty.trim()}`);
//
//         // Clear animation input fields
//         animationNameInput.value = "";
//         animationDurationInput.value = "";
//         animationIterationInput.value = "";
//         animationTimingSelect.value = "linear";
//     });
//
//     // Function to handle uploading separate CSS, HTML, JS files
//     function handleFileUpload(inputElement, type) {
//         const file = inputElement.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const content = e.target.result;
//                 switch(type) {
//                     case 'css':
//                         cssCode.setValue(content);
//                         toastr.success("CSS file uploaded successfully!");
//                         break;
//                     case 'html':
//                         htmlCode.setValue(content);
//                         toastr.success("HTML file uploaded successfully!");
//                         break;
//                     case 'js':
//                         jsCode.setValue(content);
//                         toastr.success("JavaScript file uploaded successfully!");
//                         break;
//                     default:
//                         toastr.error("Unknown file type.");
//                 }
//                 updatePreview();
//                 saveCodes();
//             };
//             reader.readAsText(file);
//         }
//     }
//
//     // Event Listeners for Separate File Uploads
//     cssUpload.addEventListener("change", function() {
//         handleFileUpload(cssUpload, 'css');
//         // Reset the file input value to allow uploading the same file again if needed
//         cssUpload.value = "";
//     });
//
//     htmlUpload.addEventListener("change", function() {
//         handleFileUpload(htmlUpload, 'html');
//         htmlUpload.value = "";
//     });
//
//     jsUpload.addEventListener("change", function() {
//         handleFileUpload(jsUpload, 'js');
//         jsUpload.value = "";
//     });
//
//     // Function to export separate files
//     function handleFileExport(content, type) {
//         let mimeType;
//         let fileName;
//         switch(type) {
//             case 'css':
//                 mimeType = "text/css";
//                 fileName = "styles.css";
//                 break;
//             case 'html':
//                 mimeType = "text/html";
//                 fileName = "index.html";
//                 break;
//             case 'js':
//                 mimeType = "application/javascript";
//                 fileName = "script.js";
//                 break;
//             default:
//                 toastr.error("Unknown file type for export.");
//                 return;
//         }
//
//         const blob = new Blob([content], { type: mimeType });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = fileName;
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success(`${type.toUpperCase()} exported successfully!`);
//     }
//
//     // Event Listeners for Separate File Exports
//     exportCssButton.addEventListener("click", function() {
//         const cssData = cssCode.getValue();
//         handleFileExport(cssData, 'css');
//     });
//
//     exportHtmlButton.addEventListener("click", function() {
//         const htmlData = htmlCode.getValue();
//         handleFileExport(htmlData, 'html');
//     });
//
//     exportJsButton.addEventListener("click", function() {
//         const jsData = jsCode.getValue();
//         handleFileExport(jsData, 'js');
//     });
//
//     // Function to export all codes as combined HTML
//     function exportAllAsHTML() {
//         const css = cssCode.getValue();
//         const html = htmlCode.getValue();
//         const js = jsCode.getValue();
//
//         const combinedHTML = `
// <!DOCTYPE html>
// <html lang="en">
// <head.ejs>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Fraymz - Combined Output</title>
//     <style>
//         ${css}
//     </style>
// </head.ejs>
// <body>
//     ${html}
//     <script>
//         ${js}
//     </script>
// </body>
// </html>
//         `;
//
//         const blob = new Blob([combinedHTML], { type: "text/html" });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'combined_output.html';
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success("All files exported as combined HTML successfully!");
//     }
//
//     // Event Listener for Export All Button
//     exportAllButton.addEventListener("click", exportAllAsHTML);
//
//     // Function to apply styles to the preview
//     function applyStyleToPreview(style) {
//         const previewDoc = previewFrame.contentWindow.document;
//         previewDoc.body.style.cssText += style;
//     }
//
//     // Event Listeners for Style Categories
//
//     // 1. Color
//     applyColorButton.addEventListener("click", function() {
//         const color = colorSlider.value;
//         const style = `color: ${color};`;
//         applyStyleToPreview(style);
//         currentColorValue.textContent = `Current Color: ${color}`;
//         cssCode.replaceRange(`\ncolor: ${color};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Color: ${color}`);
//     });
//
//     // 2. Background Color
//     applyBackgroundColorButton.addEventListener("click", function() {
//         const bgColor = backgroundColorSlider.value;
//         const style = `background-color: ${bgColor};`;
//         applyStyleToPreview(style);
//         currentBackgroundColorValue.textContent = `Current Background Color: ${bgColor}`;
//         cssCode.replaceRange(`\nbackground-color: ${bgColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Background Color: ${bgColor}`);
//     });
//
//     // 3. Border
//     applyBorderButton.addEventListener("click", function() {
//         const borderColor = borderColorSlider.value;
//         const borderWidth = borderWidthSlider.value;
//         const style = `border: ${borderWidth}px solid ${borderColor};`;
//         applyStyleToPreview(style);
//         currentBorderValue.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
//         cssCode.replaceRange(`\nborder: ${borderWidth}px solid ${borderColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Border: ${borderWidth}px solid ${borderColor}`);
//     });
//
//     // 4. Font Size
//     applyFontSizeButton.addEventListener("click", function() {
//         const fontSize = fontSizeSlider.value;
//         const style = `font-size: ${fontSize}px;`;
//         applyStyleToPreview(style);
//         currentFontSizeValue.textContent = `Current Font Size: ${fontSize}px`;
//         cssCode.replaceRange(`\nfont-size: ${fontSize}px;`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Font Size: ${fontSize}px`);
//     });
//
//     // 5. Scale
//     applyScaleButton.addEventListener("click", function() {
//         const scale = scaleSlider.value;
//         const style = `transform: scale(${scale});`;
//         applyStyleToPreview(style);
//         currentScaleValue.textContent = `Current Scale: ${scale}`;
//         cssCode.replaceRange(`\ntransform: scale(${scale});`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Scale: ${scale}`);
//     });
//
//     // 6. Z-Index
//     applyZIndexButton.addEventListener("click", function() {
//         const zIndex = zIndexInput.value;
//         const style = `z-index: ${zIndex};`;
//         applyStyleToPreview(style);
//         currentZIndexValue.textContent = `Current Z-Index: ${zIndex}`;
//         cssCode.replaceRange(`\nz-index: ${zIndex};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Z-Index: ${zIndex}`);
//     });
//
//     // 7. Opacity
//     applyOpacityButton.addEventListener("click", function() {
//         const opacity = opacitySlider.value;
//         const style = `opacity: ${opacity};`;
//         applyStyleToPreview(style);
//         currentOpacityValue.textContent = `Current Opacity: ${opacity}`;
//         cssCode.replaceRange(`\nopacity: ${opacity};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Applied Opacity: ${opacity}`);
//     });
//
//     // Animation Controls
//     addAnimationButton.addEventListener("click", function() {
//         const name = animationNameInput.value.trim();
//         const duration = animationDurationInput.value.trim();
//         const iteration = animationIterationInput.value.trim();
//         const timing = animationTimingSelect.value;
//
//         if (name === "" || duration === "" || iteration === "") {
//             toastr.warning("Please fill in all animation fields.");
//             return;
//         }
//
//         // Check if keyframes already exist to prevent duplicates
//         const existingKeyframes = cssCode.getValue().includes(`@keyframes ${name}`);
//         if (!existingKeyframes) {
//             // Create keyframes
//             const keyframes = `
// @keyframes ${name} {
//     from { opacity: 0; }
//     to { opacity: 1; }
// }
//             `;
//             cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//             toastr.success(`Created keyframes for animation: ${name}`);
//         } else {
//             toastr.warning(`Keyframes for animation "${name}" already exist.`);
//         }
//
//         // Append animation property to CSS code area
//         const animationProperty = `
// animation: ${name} ${duration}s ${timing} ${iteration};
//         `;
//         cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
//         updatePreview();
//         saveCodes();
//         toastr.success(`Added animation: ${name}`);
//
//         // Clear animation input fields
//         animationNameInput.value = "";
//         animationDurationInput.value = "";
//         animationIterationInput.value = "";
//         animationTimingSelect.value = "linear";
//     });
//
//     // Function to handle uploading separate CSS, HTML, JS files
//     function handleFileUpload(inputElement, type) {
//         const file = inputElement.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const content = e.target.result;
//                 switch(type) {
//                     case 'css':
//                         cssCode.setValue(content);
//                         toastr.success("CSS file uploaded successfully!");
//                         break;
//                     case 'html':
//                         htmlCode.setValue(content);
//                         toastr.success("HTML file uploaded successfully!");
//                         break;
//                     case 'js':
//                         jsCode.setValue(content);
//                         toastr.success("JavaScript file uploaded successfully!");
//                         break;
//                     default:
//                         toastr.error("Unknown file type.");
//                 }
//                 updatePreview();
//                 saveCodes();
//             };
//             reader.readAsText(file);
//         }
//     }
//
//     // Event Listeners for Separate File Uploads
//     cssUpload.addEventListener("change", function() {
//         handleFileUpload(cssUpload, 'css');
//         // Reset the file input value to allow uploading the same file again if needed
//         cssUpload.value = "";
//     });
//
//     htmlUpload.addEventListener("change", function() {
//         handleFileUpload(htmlUpload, 'html');
//         htmlUpload.value = "";
//     });
//
//     jsUpload.addEventListener("change", function() {
//         handleFileUpload(jsUpload, 'js');
//         jsUpload.value = "";
//     });
//
//     // Function to export separate files
//     function handleFileExport(content, type) {
//         let mimeType;
//         let fileName;
//         switch(type) {
//             case 'css':
//                 mimeType = "text/css";
//                 fileName = "styles.css";
//                 break;
//             case 'html':
//                 mimeType = "text/html";
//                 fileName = "index.html";
//                 break;
//             case 'js':
//                 mimeType = "application/javascript";
//                 fileName = "script.js";
//                 break;
//             default:
//                 toastr.error("Unknown file type for export.");
//                 return;
//         }
//
//         const blob = new Blob([content], { type: mimeType });
//         const url = URL.createObjectURL(blob);
//
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = fileName;
//         a.click();
//
//         URL.revokeObjectURL(url);
//         toastr.success(`${type.toUpperCase()} exported successfully!`);
//     }
//
//     // Event Listeners for Separate File Exports
//     exportCssButton.addEventListener("click", function() {
//         const cssData = cssCode.getValue();
//         handleFileExport(cssData, 'css');
//     });
//
//     exportHtmlButton.addEventListener("click", function() {
//         const htmlData = htmlCode.getValue();
//         handleFileExport(htmlData, 'html');
//     }



// editor.js

import toastr from "../dev/demo/test/mocha";

document.addEventListener("DOMContentLoaded", function() {
    // DOM Elements
    const cssInput = document.getElementById("css-input");
    const submitCommand = document.getElementById("submit-command");
    const previewFrame = document.getElementById("preview-frame");
    const commandSuggestions = document.getElementById("command-suggestions");
    const jsonUpload = document.getElementById("json-upload");
    const exportJsonButton = document.getElementById("export-json");
    const exportAllButton = document.getElementById("export-all");

    // Separate Uploads and Exports
    const cssUpload = document.getElementById("css-upload");
    const exportCssButton = document.getElementById("export-css");

    const htmlUpload = document.getElementById("html-upload");
    const exportHtmlButton = document.getElementById("export-html");

    const jsUpload = document.getElementById("js-upload");
    const exportJsButton = document.getElementById("export-js");

    // Style Category Elements
    const colorPicker = document.getElementById("color-picker");
    const applyColorButton = document.getElementById("apply-color");
    const currentColorValue = document.querySelector(".style-category:nth-child(1) .current-value");

    const backgroundColorPicker = document.getElementById("background-color-picker");
    const applyBackgroundColorButton = document.getElementById("apply-background-color");
    const currentBackgroundColorValue = document.querySelector(".style-category:nth-child(2) .current-value");

    const borderColorPicker = document.getElementById("border-color-picker");
    const borderWidthInput = document.getElementById("border-width-input");
    const applyBorderButton = document.getElementById("apply-border");
    const currentBorderValue = document.querySelector(".style-category:nth-child(3) .current-value");

    const fontSizeInput = document.getElementById("font-size-input");
    const applyFontSizeButton = document.getElementById("apply-font-size");
    const currentFontSizeValue = document.querySelector(".style-category:nth-child(4) .current-value");

    const scaleInput = document.getElementById("scale-input");
    const applyScaleButton = document.getElementById("apply-scale");
    const currentScaleValue = document.querySelector(".style-category:nth-child(5) .current-value");

    const zIndexInput = document.getElementById("z-index-input");
    const applyZIndexButton = document.getElementById("apply-z-index");
    const currentZIndexValue = document.querySelector(".style-category:nth-child(6) .current-value");

    const opacityInput = document.getElementById("opacity-input");
    const applyOpacityButton = document.getElementById("apply-opacity");
    const currentOpacityValue = document.querySelector(".style-category:nth-child(7) .current-value");

    // Animation Controls
    const animationNameInput = document.getElementById("animation-name");
    const animationDurationInput = document.getElementById("animation-duration");
    const animationIterationInput = document.getElementById("animation-iteration");
    const animationTimingSelect = document.getElementById("animation-timing");
    const addAnimationButton = document.getElementById("add-animation");

    // Code Sections
    const cssCodeTextarea = document.getElementById("css-code");
    const htmlCodeTextarea = document.getElementById("html-code");
    const jsCodeTextarea = document.getElementById("js-code");
    const applyCssButton = document.getElementById("apply-css");
    const applyHtmlButton = document.getElementById("apply-html");
    const applyJsButton = document.getElementById("apply-js");

    // Toastr Configuration
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

    // Initialize CodeMirror Editors
    const cssCode = CodeMirror.fromTextArea(cssCodeTextarea, {
        mode: "css",
        theme: "eclipse",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    const htmlCode = CodeMirror.fromTextArea(htmlCodeTextarea, {
        mode: "htmlmixed",
        theme: "eclipse",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    const jsCode = CodeMirror.fromTextArea(jsCodeTextarea, {
        mode: "javascript",
        theme: "eclipse",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    // Initialize Codes, load from localStorage if available
    let savedCSS = localStorage.getItem('cssCode') || '';
    let savedHTML = localStorage.getItem('htmlCode') || '';
    let savedJS = localStorage.getItem('jsCode') || '';

    cssCode.setValue(savedCSS);
    htmlCode.setValue(savedHTML);
    jsCode.setValue(savedJS);

    // Function to update the preview iframe
    function updatePreview() {
        const css = cssCode.getValue();
        const html = htmlCode.getValue();
        const js = jsCode.getValue();

        const previewDocument = `
            <!DOCTYPE html>
            <html lang="en">
            <head>      
                  <title></title

                <style>
                    ${css}
                </style>>
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

    function adjustPreviewWindow() {
        const previewContainer = document.getElementById('preview-window');
        previewContainer.style.width = window.innerWidth * 0.8 + 'px'; // 80% of window width
        previewContainer.style.height = window.innerHeight * 0.8 + 'px'; // 80% of window height
    }

// Call on load and resize
    adjustPreviewWindow();
    window.addEventListener("resize", adjustPreviewWindow);

    // Function to save codes to localStorage
    function saveCodes() {
        localStorage.setItem('cssCode', cssCode.getValue());
        localStorage.setItem('htmlCode', htmlCode.getValue());
        localStorage.setItem('jsCode', jsCode.getValue());
        toastr.success("Changes saved successfully!");
    }

    // Event listeners for CodeMirror editors
    [cssCode, htmlCode, jsCode].forEach(editor => {
        editor.on('change', function() {
            updatePreview();
            saveCodes();
        });
    });

    // StyleMap Initialization
    let styleMap = {
        "vs-text-slate-500": "color: #64748b;",
        "vs-bg-yellow-200": "background-color: #fef08a;",
        // Add more predefined styles here
    };

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

    // Initial Command Display
    displayCommands();

    // Function to apply styles to the preview
    function applyStyle(command, style) {
        if (style) {
            // Apply the style to the preview iframe's body
            previewFrame.contentWindow.document.body.style.cssText += style;
            toastr.success(`Applied: ${command}`);
        } else {
            toastr.warning("Command not recognized. Please check the available commands.");
        }
    }

    // Apply Command via Input
    submitCommand.addEventListener("click", function() {
        const command = cssInput.value.trim();
        if (command !== "") {
            const style = styleMap[command];
            if (style) {
                cssCode.replaceRange(`\n${style}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
                updatePreview();
                saveCodes();
                toastr.success(`Applied: ${command}`);
                cssInput.value = "";
            } else {
                toastr.warning("Command not recognized. Please check the available commands.");
            }
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
            toastr.error("Invalid JSON structure. It should be an object with vs-* commands as keys.");
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
            toastr.success(`Imported ${newCommands.length} new command(s) successfully!`);
            displayCommands();
        } else {
            toastr.warning("No valid commands were imported.");
        }

        console.log("Updated styleMap:", styleMap);
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
    function exportJSONFunction() {
        const data = {
            css: cssCode.getValue(),
            html: htmlCode.getValue(),
            js: jsCode.getValue()
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

    // Event listener for export JSON button
    exportJsonButton.addEventListener("click", exportJSONFunction);

    // Function to export separate files
    function handleFileExport(content, type) {
        let mimeType;
        let fileName;
        switch(type) {
            case 'css':
                mimeType = "text/css";
                fileName = "styles.css";
                break;
            case 'html':
                mimeType = "text/html";
                fileName = "index.html";
                break;
            case 'js':
                mimeType = "application/javascript";
                fileName = "script.js";
                break;
            default:
                toastr.error("Unknown file type for export.");
                return;
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(url);
        toastr.success(`${type.toUpperCase()} exported successfully!`);
    }

    // Event Listeners for Separate File Exports
    exportCssButton.addEventListener("click", function() {
        const cssData = cssCode.getValue();
        handleFileExport(cssData, 'css');
    });

    exportHtmlButton.addEventListener("click", function() {
        const htmlData = htmlCode.getValue();
        handleFileExport(htmlData, 'html');
    });

    exportJsButton.addEventListener("click", function() {
        const jsData = jsCode.getValue();
        handleFileExport(jsData, 'js');
    });

    // Function to export all codes as combined HTML
    function exportAllAsHTML() {
        const css = cssCode.getValue();
        const html = htmlCode.getValue();
        const js = jsCode.getValue();

        const combinedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fraymz - Combined Output</title>
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
        a.download = 'combined_output.html';
        a.click();

        URL.revokeObjectURL(url);
        toastr.success("All files exported as combined HTML successfully!");
    }

    // Event Listener for Export All Button
    exportAllButton.addEventListener("click", exportAllAsHTML);

    // Function to apply styles to the preview
    // function applyStyleToPreview(style) {
    //     const previewDoc = previewFrame.contentWindow.document;
    //     previewDoc.body.style.cssText += style;
    // }

    // Function to generate UUID (for future backend integration)
    // function generateUUID() { // Public Domain/MIT
    //     var d = new Date().getTime();//Timestamp
    //     var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //         var r = Math.random() * 16;//random number between 0 and 16
    //         if(d > 0){
    //             r = (d + r)%16 | 0;
    //             d = Math.floor(d/16);
    //         } else {
    //             r = (d2 + r)%16 | 0;
    //             d2 = Math.floor(d2/16);
    //         }
    //         return (c==='x' ? r : (r&0x3|0x8)).toString(16);
    //     });
    // }

    // Event Listeners for Style Categories

    // 1. Color
    applyColorButton.addEventListener("click", function() {
        const color = colorPicker.value;
        const style = `color: ${color};`;
        applyStyleToPreview(style);
        currentColorValue.textContent = `Current Color: ${color}`;
        cssCode.replaceRange(`\ncolor: ${color};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Color: ${color}`);
    });

    // 2. Background Color
    applyBackgroundColorButton.addEventListener("click", function() {
        const bgColor = backgroundColorPicker.value;
        const style = `background-color: ${bgColor};`;
        applyStyleToPreview(style);
        currentBackgroundColorValue.textContent = `Current Background Color: ${bgColor}`;
        cssCode.replaceRange(`\nbackground-color: ${bgColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Background Color: ${bgColor}`);
    });

    // 3. Border
    applyBorderButton.addEventListener("click", function() {
        const borderColor = borderColorPicker.value;
        const borderWidth = borderWidthInput.value;
        const style = `border: ${borderWidth}px solid ${borderColor};`;
        applyStyleToPreview(style);
        currentBorderValue.textContent = `Current Border: ${borderWidth}px solid ${borderColor}`;
        cssCode.replaceRange(`\nborder: ${borderWidth}px solid ${borderColor};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Border: ${borderWidth}px solid ${borderColor}`);
    });

    // 4. Font Size
    applyFontSizeButton.addEventListener("click", function() {
        const fontSize = fontSizeInput.value;
        const style = `font-size: ${fontSize}px;`;
        applyStyleToPreview(style);
        currentFontSizeValue.textContent = `Current Font Size: ${fontSize}px`;
        cssCode.replaceRange(`\nfont-size: ${fontSize}px;`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Font Size: ${fontSize}px`);
    });

    // 5. Scale
    applyScaleButton.addEventListener("click", function() {
        const scale = scaleInput.value;
        const style = `transform: scale(${scale});`;
        applyStyleToPreview(style);
        currentScaleValue.textContent = `Current Scale: ${scale}`;
        cssCode.replaceRange(`\ntransform: scale(${scale});`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Scale: ${scale}`);
    });

    // 6. Z-Index
    applyZIndexButton.addEventListener("click", function() {
        const zIndex = zIndexInput.value;
        const style = `z-index: ${zIndex};`;
        applyStyleToPreview(style);
        currentZIndexValue.textContent = `Current Z-Index: ${zIndex}`;
        cssCode.replaceRange(`\nz-index: ${zIndex};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Z-Index: ${zIndex}`);
    });

    // 7. Opacity
    applyOpacityButton.addEventListener("click", function() {
        const opacity = opacityInput.value;
        const style = `opacity: ${opacity};`;
        applyStyleToPreview(style);
        currentOpacityValue.textContent = `Current Opacity: ${opacity}`;
        cssCode.replaceRange(`\nopacity: ${opacity};`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Applied Opacity: ${opacity}`);
    });

    // Animation Controls
    addAnimationButton.addEventListener("click", function() {
        const name = animationNameInput.value.trim();
        const duration = animationDurationInput.value.trim();
        const iteration = animationIterationInput.value.trim();
        const timing = animationTimingSelect.value;

        if (name === "" || duration === "" || iteration === "") {
            toastr.warning("Please fill in all animation fields.");
            return;
        }

        // Check if keyframes already exist to prevent duplicates
        const existingKeyframes = cssCode.getValue().includes(`@keyframes ${name}`);
        if (!existingKeyframes) {
            // Create keyframes
            const keyframes = `
@keyframes ${name} {
    from { opacity: 0; }
    to { opacity: 1; }
}
            `;
            cssCode.replaceRange(`\n${keyframes}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
            toastr.success(`Created keyframes for animation: ${name}`);
        } else {
            toastr.warning(`Keyframes for animation "${name}" already exist.`);
        }

        // Append animation property to CSS code area
        const animationProperty = `
animation: ${name} ${duration}s ${timing} ${iteration};
        `;
        cssCode.replaceRange(`\n${animationProperty}`, { line: cssCode.lineCount() }, { line: cssCode.lineCount() });
        updatePreview();
        saveCodes();
        toastr.success(`Added animation: ${name}`);

        // Clear animation input fields
        animationNameInput.value = "";
        animationDurationInput.value = "";
        animationIterationInput.value = "";
        animationTimingSelect.value = "linear";
    });

    // Function to handle uploading separate CSS, HTML, JS files
    function handleFileUpload(inputElement, type) {
        const file = inputElement.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                switch(type) {
                    case 'css':
                        cssCode.setValue(content);
                        toastr.success("CSS file uploaded successfully!");
                        break;
                    case 'html':
                        htmlCode.setValue(content);
                        toastr.success("HTML file uploaded successfully!");
                        break;
                    case 'js':
                        jsCode.setValue(content);
                        toastr.success("JavaScript file uploaded successfully!");
                        break;
                    default:
                        toastr.error("Unknown file type.");
                }
                updatePreview();
                saveCodes();
            };
            reader.readAsText(file);
        }
    }

    // Event Listeners for Separate File Uploads
    cssUpload.addEventListener("change", function() {
        handleFileUpload(cssUpload, 'css');
        // Reset the file input value to allow uploading the same file again if needed
        cssUpload.value = "";
    });

    htmlUpload.addEventListener("change", function() {
        handleFileUpload(htmlUpload, 'html');
        htmlUpload.value = "";
    });

    jsUpload.addEventListener("change", function() {
        handleFileUpload(jsUpload, 'js');
        jsUpload.value = "";
    });

    // Function to export separate files
    function handleFileExport(content, type) {
        let mimeType;
        let fileName;
        switch(type) {
            case 'css':
                mimeType = "text/css";
                fileName = "styles.css";
                break;
            case 'html':
                mimeType = "text/html";
                fileName = "index.html";
                break;
            case 'js':
                mimeType = "application/javascript";
                fileName = "script.js";
                break;
            default:
                toastr.error("Unknown file type for export.");
                return;
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(url);
        toastr.success(`${type.toUpperCase()} exported successfully!`);
    }

    // Event Listeners for Separate File Exports
    exportCssButton.addEventListener("click", function() {
        const cssData = cssCode.getValue();
        handleFileExport(cssData, 'css');
    });

    exportHtmlButton.addEventListener("click", function() {
        const htmlData = htmlCode.getValue();
        handleFileExport(htmlData, 'html');
    });

    exportJsButton.addEventListener("click", function() {
        const jsData = jsCode.getValue();
        handleFileExport(jsData, 'js');
    });

    // Function to export all codes as combined HTML
    function exportAllAsHTML() {
        const css = cssCode.getValue();
        const html = htmlCode.getValue();
        const js = jsCode.getValue();

        const combinedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fraymz - Combined Output</title>
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
        a.download = 'combined_output.html';
        a.click();

        URL.revokeObjectURL(url);
        toastr.success("All files exported as combined HTML successfully!");
    }

    // Event Listener for Export All Button
    exportAllButton.addEventListener("click", exportAllAsHTML);

    // Function to apply styles to the preview
    function applyStyleToPreview(style) {
        const previewDoc = previewFrame.contentWindow.document;
        previewDoc.body.style.cssText += style;
    }

    // Function to generate UUID (for future backend integration)
    function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c==='x' ? r : (r&0x3|0x8)).toString(16);
        });
    }

    // Additional Enhancements for User Experience

    // Preventing CSS Code from Being Overwritten Indiscriminately
    // Instead of appending styles, we can manage styles using specific selectors or classes
    // This implementation is basic and can be enhanced based on specific requirements

    // Adding Preview Window Adjustments


    // Call adjustPreviewWindow on load and on window resize
    adjustPreviewWindow();
    window.addEventListener("resize", adjustPreviewWindow);

    // To ensure the CSS information screen is not hectic, limit the number of commands displayed
    // Implement pagination or search if the list becomes too long
    // For now, it's limited to what's imported

    // Future Steps:
    // - Integrate UUIDs for each saved profile
    // - Connect to a backend server with MongoDB
    // - Implement CRUD operations and user authentication
    // - Enhance the UI with Chakra UI, Bootstrap, or Tailwind CSS
    // - Consider integrating Monaco Editor for advanced code editing
    // - Enable real-time collaboration using WebSockets
    // - Implement animation exports as GIFs or videos

});