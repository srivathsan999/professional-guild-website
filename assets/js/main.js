/**
 * Main Javascript
 * Handles common functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Current Year in Footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    const sideMenu = document.getElementById('mobile-side-menu');
    const menuOverlay = document.getElementById('mobile-menu-overlay');

    if (menuToggle && sideMenu && menuOverlay) {
        const toggleMenu = (show) => {
            sideMenu.classList.toggle('active', show);
            menuOverlay.classList.toggle('active', show);
            document.body.style.overflow = show ? 'hidden' : '';
        };

        menuToggle.addEventListener('click', () => toggleMenu(true));
        menuClose.addEventListener('click', () => toggleMenu(false));
        menuOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;

            // Close other open items (Optional, for better UX)
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    // Mobile Dropdown Toggle
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdowns.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            toggle.classList.toggle('active');
            submenu.classList.toggle('active');
        });
    });
});

