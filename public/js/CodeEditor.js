// CodeEditor.js
import React from 'react';

const CodeEditor = ({ language, value, onChange }) => {
    return (
        <textarea
            rows="10"
            style={{ width: '100%', fontFamily: 'monospace' }}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Type your ${language} code here...`}
        />
    );
};

export default CodeEditor;