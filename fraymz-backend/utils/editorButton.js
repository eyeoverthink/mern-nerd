const editorButton = new Button({
    text: 'Go to Editor',
    onClick: () => theatre.showScreen('editor'),
    classes: 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
});
editorButton.mount(document.getElementById('controls'));
// Compare this snippet from fraymz-backend/Editor.js:
