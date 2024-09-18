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

    const projectCards = document.querySelectorAll('.project-card');
const overlay = document.getElementById('project-overlay');
const closeBtn = document.querySelector('.close-btn');
const overlayTitle = document.getElementById('overlay-title');
const overlayDescription = document.getElementById('overlay-description');
const overlayTechnologies = document.getElementById('overlay-technologies');
const overlayDownloads = document.getElementById('overlay-downloads');

// Define project details
const projectDetails = {
    'gv-sw': {
        title: 'GV/SW Project',
        description: 'Hier zie je het project wat ik op school heb moeten maken. Ik heb hiervoor de volgende talen en frameworks gebruikt:',
        technologies: ['C#(.NET WPF)', 'Flutter', 'PHP(Laravel)'],
        downloads: [
            { name: 'GV Desktop', url: 'downloads/gvdesktop.zip', icon: '&#x1F4BE;' },
            { name: 'GV Mobile', url: 'downloads/GVMobile.zip', icon: '&#x1F4F1;' },
            { name: 'GV API', url: 'downloads/apiProject6.zip', icon: '&#x1F4BB;' },
            { name: 'SW Desktop', url: 'downloads/SWDesktop.zip', icon: '&#x1F4BE;' },
            { name: 'SW API', url: 'downloads/SWAPI.zip', icon: '&#x1F4BB;' }
        ]
    },
    'stage-project-1': {
        title: 'Stage Project 1',
        description: 'Ik heb voor mijn stage een Systeem moeten bouwen waar je fietsen kunt repareren en verkopen. Ik heb hiervoor de volgende talen en frameworks gebruikt:',
        technologies: ['C#(Xamarin)', 'C#(ASP.NET)'],
        downloads: [
            { name: 'Desktop', url: 'downloads/het-fietsenstation-app.zip', icon: '&#x1F4BE;' },
            { name: 'API', url: 'downloads/het-fietsen-station-api.zip', icon: '&#x1F4BE;' }
        ]
    },
    'stage-project-2': {
        title: 'Stage Project 2',
        description: 'Als 2de Project heb ik voor mijn stage een Systeem moeten bouwen waar je mee kunt in en uit klokken en mijn uren zien. Ik heb hiervoor de volgende talen en frameworks gebruikt:',
        technologies: ['PHP(Laravel)', 'Python(Raspberry PI)'],
        downloads: [
            { name: 'Website', url: 'downloads/New-Tijdstation-web.zip', icon: '&#x1F4BE;' },
            { name: 'Raspberry PI Inklok Systeem', url: 'downloads/TijdstationPI.zip', icon: '&#x1F4BE;' }
        ]
    },
    'pinet-hub': {
        title: 'PiNetHub',
        description: 'Ik ben net begonnen met dit project, maar wat het doet is zorgen dat je een netwerk server hebt. Hiermee kun je meerdere API\'s live zetten, met elkaar chatten, video bellen via netwerk, bestand delen, en veel meer. Ik heb hiervoor de volgende talen en frameworks gebruikt:',
        technologies: ['Python(Django)', 'C++', 'Python(Raspberry PI)'],
        downloads: [
            { name: 'Project', url: 'downloads/PiNetHub.zip', icon: '&#x1F4BE;' }
        ]
    }
};

// Add click event listeners to project cards
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectDetails[projectId];

        if (project) {
            // Populate overlay with project details
            overlayTitle.textContent = project.title;
            overlayDescription.textContent = project.description;
            overlayTechnologies.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
            overlayDownloads.innerHTML = project.downloads.map(download => `<a href="${download.url}" class="project-link" download><i class="icon">${download.icon}</i> ${download.name}</a>`).join('');

            // Show the overlay
            overlay.style.display = 'flex';
        }
    });
});

// Close the overlay
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Close the overlay when clicking outside the content area
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
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