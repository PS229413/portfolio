document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js for animated typing effect
    const typed = new Typed('#typed-text', {
        strings: ['Software Developer', 'Python Enthusiast', 'Full Stack Developer', 'Mobile Appliction Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        smartBackspace: true,
    });

    // ScrollReveal for animations on scroll
    ScrollReveal().reveal('.section-title, .section p, .skill-card, .project-card, .timeline-item', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        interval: 200,
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for navbar height
                behavior: 'smooth',
            });
        });
    });

    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    window.addEventListener('scroll', () => {
        skillBars.forEach(skillBar => {
            const progress = skillBar.getAttribute('data-progress');
            const sectionPos = skillBar.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            if (sectionPos < screenPos) {
                skillBar.style.width = progress;
            }
        });
    });

    // Mobile Navigation (Burger Menu)
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        // Burger animation
        burger.classList.toggle('toggle');
    });
   
// script.js
(function() {
    // Function to get the current count from localStorage
    function getVisitorCount() {
        return parseInt(localStorage.getItem('visitorCount') || '0', 10);
    }

    // Function to set the visitor count to localStorage
    function setVisitorCount(count) {
        localStorage.setItem('visitorCount', count);
    }

    // Increment the visitor count
    function incrementVisitorCount() {
        let count = getVisitorCount();
        count++;
        setVisitorCount(count);
        return count;
    }

    // Create a downloadable file with the visitor count
    function downloadVisitorCount(count) {
        const blob = new Blob([`Visitor Count: ${count}`], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'visitors.txt';
        document.body.appendChild(a); // Append the anchor to the body
        a.click(); // Trigger the download
        document.body.removeChild(a); // Remove the anchor from the body
        URL.revokeObjectURL(url); // Release the object URL
    }

    // Increment the count and download the file
    const count = incrementVisitorCount();
    downloadVisitorCount(count);
})();


});