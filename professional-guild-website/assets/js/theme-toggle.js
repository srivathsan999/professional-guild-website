/**
 * Theme Toggle
 * Handles Light/Dark mode switching via localStorage
 */

const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

// Check Local Storage on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
} else {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }
}

// Toggle Event
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme) {
    if (!icon) return;

    // Assuming FontAwesome usage
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}
