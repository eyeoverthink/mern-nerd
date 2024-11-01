// theme-toggle.js
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Set theme based on saved preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}