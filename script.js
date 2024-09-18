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

    // Show/hide back-to-top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Back-to-top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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

    // Show the overlay form
    const showModalBtn = document.getElementById('show-add-project');
    const overlay = document.getElementById('add-project-overlay');
    const closeBtn = document.querySelector('.overlay .close');

    showModalBtn.addEventListener('click', () => {
        overlay.classList.add('show'); // Add 'show' class to display the overlay
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show'); // Remove 'show' class to hide the overlay
    });

    // Retrieve projects from LocalStorage
    function getProjects() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        return projects;
    }

    // Render projects to the DOM
    function renderProjects() {
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = ''; // Clear existing content
        const projects = getProjects();
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.downloadLink}" class="project-link" download>Download project</a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Add new project form submission handler
    const addProjectForm = document.getElementById('add-project-form');
    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const img = document.getElementById('project-img').value;
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const downloadLink = document.getElementById('project-download').value;

        // Validate form data
        if (!img || !title || !description || !downloadLink) {
            alert('Vul alle velden in.');
            return;
        }

        // Create a new project object
        const newProject = {
            img,
            title,
            description,
            downloadLink
        };

        // Save new project to LocalStorage
        const projects = getProjects();
        projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(projects));

        // Clear form fields
        addProjectForm.reset();

        // Hide the overlay
        overlay.classList.remove('show');

        // Render updated projects
        renderProjects();
    });

    // Initial render of projects
    renderProjects();

    const projectsContainer = document.getElementById('projects-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentScroll = 0;
    const cardWidth = 320; // Width of the project card (adjust with padding/margin)
    const visibleCards = 3; // Number of visible cards in the viewport
    const totalCards = document.querySelectorAll('.project-card').length;
    
    nextBtn.addEventListener('click', () => {
        if (currentScroll < totalCards - visibleCards) {
            currentScroll++;
            projectsContainer.style.transform = `translateX(-${currentScroll * cardWidth}px)`;
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentScroll > 0) {
            currentScroll--;
            projectsContainer.style.transform = `translateX(-${currentScroll * cardWidth}px)`;
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        let visitCount = localStorage.getItem('visitCount');
    
        if (visitCount === null || visitCount === 0) {
            // Eerste bezoek
            visitCount = 1;
        } else {
            // Huidige bezoekersaantal verhogen
            visitCount = parseInt(visitCount, 10) + 1;
        }
    
        // Update de localStorage met het nieuwe aantal bezoeken
        localStorage.setItem('visitCount', visitCount);
    
        // Optioneel: weergave van het aantal bezoeken in de console
        console.log('Aantal bezoeken:', visitCount);
    });
    
});