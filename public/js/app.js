import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import ProfilesDropdown from './ProfilesDropdown';
import CreateProfile from './CreateProfile';
import {  Box, Heading, Text } from '@chakra-ui/react';
// main.js

import theatre from './theatre.js';
import HomePage from './HomePage.js';
import EditorPage from '../EditorPage.js';
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

const App = () => {
    const [css, setCss] = useState('');
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');

    const handleLoadProfile = (profile) => {
        setCss(profile.css);
        setHtml(profile.html);
        setJs(profile.js);
    };

    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>Fraymz - Advanced Editor</Heading>

            <ProfilesDropdown onLoadProfile={handleLoadProfile} />
            <CreateProfile />

            <Box mt={4}>
                <Heading as="h2" size="md">CSS</Heading>
                <CodeEditor language="css" value={css} onChange={setCss} />
                <Button id="apply-css" colorScheme="teal" mt={2}>Apply CSS</Button>
            </Box>

            <Box mt={4}>
                <Heading as="h2" size="md">HTML</Heading>
                <CodeEditor language="html" value={html} onChange={setHtml} />
                <Button id="apply-html" colorScheme="teal" mt={2}>Apply HTML</Button>
            </Box>

            <Box mt={4}>
                <Heading as="h2" size="md">JavaScript</Heading>
                <CodeEditor language="javascript" value={js} onChange={setJs} />
                <Button id="apply-js" colorScheme="teal" mt={2}>Apply JavaScript</Button>
            </Box>

            {/* Add preview and other functionalities here */}
        </Box>
    );
};

export default App;