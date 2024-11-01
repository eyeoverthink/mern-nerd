// HomePage.js

import theatre from './theatre.js';
import Button from './Button.js';
import LayoutManager from './LayoutManager.js';
import fetchTemplate from './templateLoader.js';

class HomePage {
    constructor(props, components) {
        this.props = props;
        this.components = components;
        this.container = document.getElementById('app'); // Main container
    }

    async mount() {
        // Render the EJS template for the home page
        this.container.innerHTML = await this.renderTemplate();
        this.initializeComponents();
    }

    async unmount() {
        // Clean up the home page
        this.container.innerHTML = '';
    }

    async renderTemplate() {
        const template = await fetchTemplate('homePage.ejs');
        return ejs.render(template, this.props);
    }

    initializeComponents() {
        // Initialize UI Components like Buttons
        const editorButtonContainer = document.getElementById('home-buttons');
        const editorButton = new this.components.Button({
            text: 'Go to Editor',
            onClick: () => theatre.showScreen('editor'),
            classes: 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        });
        editorButton.mount(editorButtonContainer);

        // Add more buttons or components as needed
    }
}

export default HomePage;