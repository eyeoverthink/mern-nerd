// main.js

;
import theatre from './theatre.js';
import HomePage from './HomePage.js';
import EditorPage from './EditorPage.js';
import Button from './Button.js';
// Import other components as needed

// Register components
theatre.registerComponent('Button', Button);
// Register other components

// Register screens
theatre.registerScreen('home', HomePage);
theatre.registerScreen('editor', EditorPage);
// Register other screens

// Show the initial screen
theatre.showScreen('home');
// Import other screens as needed

// Register screens
theatre.registerScreen('home', HomePage);
theatre.registerScreen('editor', EditorPage);
// Register other screens

// Show the initial screen
theatre.showScreen('home');