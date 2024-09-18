import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_XKpUwcWek9497B4k1ZZTBkAvy9QC8U0",
  authDomain: "portfolioraulvdzande.firebaseapp.com",
  projectId: "portfolioraulvdzande",
  storageBucket: "portfolioraulvdzande.appspot.com",
  messagingSenderId: "1043778728298",
  appId: "1:1043778728298:web:d846c0ac48308ae5587513",
  measurementId: "G-D9Q86DW344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAnalytics(app);

// Function to get the current count from Firebase
function getVisitorCount() {
    const countRef = ref(database, 'visitorCount');
    return get(countRef).then(snapshot => snapshot.val() || 0);
}

// Function to set the visitor count in Firebase
function setVisitorCount(count) {
    const countRef = ref(database, 'visitorCount');
    return set(countRef, count);
}

// Increment the visitor count
getVisitorCount().then(count => {
    count++;
    setVisitorCount(count);
    console.log(`Visitor Count: ${count}`);
});
});