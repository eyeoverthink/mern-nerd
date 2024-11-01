// Add at the top
const axios = require('axios'); // If using a bundler; otherwise, include via CDN

// Function to save styles to backend
async function saveStylesToServer() {
    try {
        for (const [command, style] of Object.entries(styleMap)) {
            await axios.post('http://localhost:5000/api/styles', { command, style });
        }
        alert('Styles saved to server successfully!');
    } catch (error) {
        console.error('Error saving styles to server:', error);
        alert('Failed to save styles to server.');
    }
}

// Add a new button for saving to server in `index.html`:
/*
<div class="control">
    <button id="save-server">Save to Server</button>
</div>
*/

// Add event listener for the new button
const saveServerButton = document.getElementById("save-server");
saveServerButton.addEventListener("click", saveStylesToServer);