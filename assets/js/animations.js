/**
 * Animations using GSAP
 * Fade up effects for sections
 */

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Elements
    const fadeElements = document.querySelectorAll('.animate-fade-up');

    fadeElements.forEach(element => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Staggered List Items
    const staggerLists = document.querySelectorAll('.animate-stagger-list');
    staggerLists.forEach(list => {
        const items = list.children;
        gsap.fromTo(items,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: list,
                    start: "top 85%"
                }
            }
        );
    });
});
