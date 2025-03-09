document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = 'Welcome to the Note Taking App (with TypeScript)';
    }
});