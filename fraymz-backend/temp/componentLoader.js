// componentLoader.js

import Button from './Button.js';
import theatre from './theatre.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.getElementById('home-buttons');

    const editorButton = new Button({
        text: 'Go to Editor',
        onClick: () => theatre.showScreen('editor'),
        styles: {
            padding: '10px 20px',
            backgroundColor: '#10b981',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
        }
    });

    editorButton.mount(buttonContainer);

    // Add more buttons or components as needed
});