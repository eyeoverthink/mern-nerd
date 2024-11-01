Fraymz - CSS, HTML & JavaScript Editor
=======================================
project: Fraymz - CSS, HTML & JavaScript Editor, and combinator. 
author: Vaughn Scott
date: 2021-10-14
version: 1.0
contact: eyeoverthink@gmail.com


File Structure : 

fraymz/
│
├── templates/
│   ├── homePage.ejs
│   ├── editorPage.ejs
│   └── ... other templates
│
├── public/
│   ├── css/
│   │   └── editor.css
│   ├── js/
│   │   ├── theatre.js
│   │   ├── Button.js
│   │   ├── LayoutManager.js
│   │   ├── templateLoader.js
│   │   ├── EditorPage.js
│   │   └── main.js
│   └── ... other public assets
│
├── server.js
├── package.json
└── ... other server files




Class: index.html:
1.	Dynamic Style Management:
•	Sliders and inputs for various style categories.
•	Apply buttons to apply selected styles.
•	Real-time preview updates.
2.	JSON Profile Upload:
•	Import custom CSS command profiles.
•	Dynamic updating of available commands

Class: editor.css:
enhanced styling for dynamic sections, sliders, apply buttons, 
and overall layout improvements using Flexbox. This CSS ensures a responsive and visually appealing interface.


Class: editor.js: 
.	Layout and Flexbox:
•	Utilized Flexbox to create responsive layouts for controls, style categories, and code sections.
•	Ensured that elements wrap appropriately on smaller screens for better mobile responsiveness.
2.	Style Categories:
•	Each style category (Color, Background Color, Border, Font Size, Scale, Z-Index, Opacity) is encapsulated within a .style-category div.
•	Added sliders or inputs as required, along with an Apply button and a section to display the current value.
3.	Buttons and Inputs:
•	Styled buttons with hover effects for better user interaction.
•	Ensured consistent styling across all input elements.
4.	Preview and Command Suggestions:
•	Styled the preview window (#preview-window) and the command suggestions section (#command-suggestions) for clarity and aesthetics.
5.	Responsive Design:
•	Added media queries to adjust layouts on smaller screens, ensuring usability across devices.

3. Complete editor.js

Here’s the complete editor.js file incorporating all requested features, fixing previous issues, and ensuring smooth functionality. This script manages style applications, JSON profile uploads, separate file uploads and exports, animations, and real-time previews.


Explanation of editor.js Enhancements

	1.	Initialization:
	•	CodeMirror Editors: Initialized CodeMirror instances for CSS, HTML, and JavaScript with appropriate modes and themes.
	•	Local Storage: Loaded saved CSS, HTML, and JS code from localStorage to ensure persistence across sessions.
	2.	Style Categories:
	•	Sliders and Inputs: Added event listeners for each style category’s slider/input and apply button.
	•	Apply Buttons: When clicked, these buttons apply the selected style to the preview iframe, update the CSS code area, display the current value, and save the changes.
	•	Current Values: Display the current value below each style category for real-time feedback.
	3.	JSON Profile Upload:
	•	Validation: Ensured that the uploaded JSON file is a valid object with keys starting with vs-.
	•	Importing Commands: Imported valid commands into the styleMap and updated the command suggestions list.
	•	Feedback: Provided Toastr notifications for successful imports or warnings for invalid data.
	4.	Separate File Uploads and Exports:
	•	Uploading: Allowed users to upload separate CSS, HTML, or JavaScript files, replacing the existing code in their respective sections.
	•	Exporting: Enabled exporting individual CSS, HTML, and JS files, as well as exporting all content combined into a single HTML file.
	5.	Preview Functionality:
	•	Real-Time Updates: As users make changes, the preview iframe updates in real-time to reflect the latest styles and content.
	•	Blob URLs: Used Blob URLs to safely load the preview content.
	6.	Toastr Notifications:
	•	User Feedback: Implemented Toastr for success and error notifications, enhancing user experience.
	7.	Error Handling:
	•	JSON Parsing: Handled errors during JSON parsing with appropriate alerts and console logs.
	•	Unknown Commands: Warned users when commands are not recognized or improperly formatted.
	8.	Animation Controls:
	•	Keyframes: Allowed users to define custom @keyframes for animations.
	•	Apply Animations: Users can specify animation name, duration, iteration count, and timing function, which are then applied to the preview iframe.
	•	Feedback: Provided real-time feedback on added animations.

4. Addressing Specific Issues

4.1. JSON Upload Not Populating Preview or Boxes

Cause: The JSON upload functionality was not correctly updating the styleMap and consequently not applying the styles to the preview or the boxes.

Solution:

	•	Validation: Ensured that only valid commands (starting with vs-) are imported.
	•	StyleMap Update: Properly updated the styleMap with new commands.
	•	Command Suggestions: Updated the Available Commands list dynamically after importing.
	•	Apply Styles Correctly: Applied the imported styles correctly to the preview iframe without cluttering the CSS.

4.2. CSS Constantly Reading Every Value

Cause: The previous implementation might have been appending styles indiscriminately without proper control, leading to cluttered CSS.

Solution:

	•	Controlled Application: Refined the applyStyle function to only apply specific styles when the corresponding apply button is clicked.
	•	Style Management: Prevented automatic appending of styles unless explicitly triggered by user actions.
	•	Clean StyleMap: Managed the styleMap effectively to ensure only desired styles are maintained.

5. Additional Enhancements

5.1. Implementing Sliders and Inputs for Style Categories

Each style category now has:

	•	Sliders/Inputs: Allowing users to adjust values such as color, background color, border width/color, font size, scale, z-index, and opacity.
	•	Apply Buttons: To apply the selected style to the preview and update the CSS code.
	•	Current Value Displays: Showing the current value below each style category for real-time feedback.

5.2. Sectioning with Flexboxes

Each style category is encapsulated within a .style-category div, styled with Flexbox to create a dynamic and organized layout.

5.3. Separate File Uploads and Exports

Users can now:

	•	Upload Separate Files: Upload individual CSS, HTML, or JavaScript files, replacing the current code in the editor.
	•	Export Separate Files: Download the current CSS, HTML, or JavaScript code as separate files.
	•	Export All as Combined HTML: Download all code combined into a single HTML file for easy sharing and deployment.

5.4. Animation Controls

Added controls to create CSS animations:

	•	Inputs: For animation name, duration, iteration count, and timing function.
	•	Add Animation Button: To generate @keyframes and apply the animation to the preview.
	•	Preview: Animations are immediately visible in the preview iframe.

5.5. Toastr Notifications

Implemented Toastr for user-friendly notifications on actions like applying styles, uploading/exporting files, and handling errors.

6. Testing the Implementation

To ensure that everything works as expected, follow these testing steps:

	1.	Uploading and Applying Styles:
	•	Sliders and Apply Buttons:
	•	Adjust each slider or input (Color, Background Color, Border, Font Size, Scale, Z-Index, Opacity).
	•	Click the corresponding Apply button.
	•	Observe the changes in the preview iframe and the Current Value display.
	•	Check localStorage to ensure changes are saved.
	2.	JSON Profile Upload:
	•	Create a JSON File:
	•	Example profile.json:

profile.json Example : 

{
"vs-text-red-500": "color: #ef4444;",
"vs-bg-blue-200": "background-color: #bfdbfe;",
"vs-border-3px-green": "border: 3px solid #10b981;"
}	


Upload the JSON Profile:
	•	Click on Upload CSS Profile and select profile.json.
	•	A success notification should appear indicating the number of commands imported.
	•	The Available Commands list should update to include the new commands.
	•	Apply Imported Commands:
	•	Type vs-text-red-500 in the CSS command input and apply.
	•	Verify that the text color changes to red in the preview.

	3.	Separate File Uploads and Exports:
	•	Uploading Files:
	•	Upload separate CSS, HTML, and JS files using their respective upload buttons.
	•	The content should replace existing code and update the preview accordingly.
	•	Exporting Files:
	•	Click on Export CSS, Export HTML, or Export JavaScript to download the respective files.
	•	Click on Export All as HTML to download a combined HTML file containing all code.
	4.	Real-Time Preview:
	•	As you make changes in any code section or through sliders, the preview iframe should update instantly to reflect those changes.
	5.	Error Handling:
	•	Invalid JSON: Try uploading an invalid JSON file to ensure that error notifications are triggered appropriately.
	•	Unknown Commands: Attempt to apply a non-existent command to see the warning notification.
	6.	Responsiveness:
	•	Resize the browser window or test on different devices to ensure that the layout adjusts appropriately.

7. Moving Forward

With the above implementations, Fraymz has become a more robust and user-friendly CSS, HTML, and JavaScript editor. Here are the next steps you can take to further enhance the application:

7.1. Enhancing Import/Export Functionality (Step 8.2)

	1.	Support for Separate CSS, HTML, and JS Files:
	•	Implementation: Already integrated in the provided editor.js with separate upload and export buttons for each file type.
	•	Benefit: Users can manage each code section independently, making the editor more flexible.
	2.	Exporting as Combined Files:
	•	Implementation: Added an Export All as HTML button that combines CSS, HTML, and JS into a single HTML file.
	•	Benefit: Facilitates easy sharing and deployment of complete projects.

7.2. Integrating Advanced Code Editor Libraries (Step 8.3)

	1.	Monaco Editor (Optional):
	•	Purpose: For an even more advanced code editing experience with features like IntelliSense, better syntax highlighting, and more.
	•	Consideration: Monaco Editor is heavier compared to CodeMirror, so evaluate based on performance needs.
	2.	Implementation Steps:
	•	Include Monaco Editor: Integrate via CDN or npm packages.
	•	Initialize Monaco Instances: Replace CodeMirror instances with Monaco editors.
	•	Adjust Event Listeners: Modify event listeners to work with Monaco’s API.

7.3. Backend Integration and MongoDB Setup

	1.	Setting Up a Backend Server:
	•	Technology Stack: Use Node.js with Express.js for the server.
	•	Database: Integrate MongoDB to store user profiles, projects, and other relevant data.
	2.	Implementing CRUD Operations:
	•	Routes and Controllers: Create RESTful API endpoints for creating, reading, updating, and deleting profiles.
	•	Schemas: Define MongoDB schemas for storing CSS, HTML, JS profiles, user data, etc.
	3.	User Authentication:
	•	Security: Implement authentication mechanisms (e.g., JWT) to secure user data.
	•	Personalization: Allow users to have personalized experiences, saving their projects, and accessing them across devices.
	4.	Connecting Frontend to Backend:
	•	API Integration: Use fetch or Axios to communicate with the backend API.
	•	State Management: Manage application state to reflect data from the backend.

7.4. UI/UX Enhancements with Libraries

	1.	Chakra UI, Bootstrap, Tailwind CSS:
	•	Purpose: Enhance the visual aesthetics and responsiveness of the application.
	•	Implementation:
	•	Chakra UI: For React-based applications, providing accessible and customizable components.
	•	Bootstrap: For grid layouts, components, and utility classes.
	•	Tailwind CSS: For utility-first CSS styling, enabling rapid UI development.
	2.	Templating with EJS:
	•	Purpose: For server-side rendering, allowing dynamic content generation.
	•	Consideration: Useful if you decide to implement server-side rendering alongside your backend.

7.5. Real-Time Collaboration and Publishing Changes

	1.	Real-Time Environment:
	•	Purpose: Allow multiple users to collaborate on the same project simultaneously.
	•	Implementation: Integrate WebSockets (e.g., Socket.io) to enable real-time updates.
	2.	Publishing Changes:
	•	Feature: Enable users to publish their projects directly to a webpage.
	•	Benefit: Facilitates immediate sharing and deployment of projects.

7.6. Preview Windows and Animation Previews

	1.	Separate Preview Windows:
	•	Purpose: Allow users to preview HTML, CSS, and animations independently.
	•	Implementation: Create separate iframes or sections for each preview.
	2.	Exporting Animations as GIFs or Videos:
	•	Purpose: Provide visual representations of animations.
	•	Implementation:
	•	Client-Side: Use libraries like html2canvas and gif.js to capture animations.
	•	Server-Side: Process and convert animations to desired formats.

8. Conclusion

You’ve successfully integrated a comprehensive set of features into your Fraymz - CSS, HTML & JavaScript Editor, making it a powerful tool for users to create and manage their web projects. The provided editor.css and editor.js files incorporate all the requested functionalities, addressing previous issues, and enhancing the application’s capabilities.

Key Achievements:

	1.	Dynamic Style Management:
	•	Sliders and inputs for various style categories.
	•	Apply buttons to apply selected styles.
	•	Real-time preview updates.
	2.	JSON Profile Upload:
	•	Import custom CSS command profiles.
	•	Dynamic updating of available commands.
	3.	File Uploads and Exports:
	•	Upload and export separate CSS, HTML, and JS files.
	•	Export all code combined into a single HTML file.
	4.	Animation Controls:
	•	Define and apply custom animations.
	•	Immediate feedback and preview of animations.
	5.	User Feedback:
	•	Implemented Toastr notifications for enhanced user experience.
	6.	Responsive and Organized UI:
	•	Flexbox layout for organized sections.
	•	Responsive design for various screen sizes.

Next Steps:

	1.	Backend Integration:
	•	Set up a backend server with MongoDB for storing user data and profiles.
	•	Implement CRUD operations and user authentication.
	2.	Advanced Code Editor Integration:
	•	Consider integrating Monaco Editor for a more advanced coding experience.
	3.	UI/UX Enhancements:
	•	Utilize Chakra UI, Bootstrap, or Tailwind CSS for improved styling and responsiveness.
	•	Implement templating with EJS if necessary.
	4.	Real-Time Collaboration:
	•	Enable real-time collaboration features using WebSockets.
	5.	Animation Exports:
	•	Implement functionality to export animations as GIFs or videos for easy sharing.
	6.	Testing and Refinement:
	•	Continuously test each feature.
	•	Gather user feedback to guide further improvements.

	By Vaughn Scott c/o Eyeoverthink Productions
