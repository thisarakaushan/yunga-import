// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scroll for nav links
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate WhatsApp button bounce
const waBtn = document.querySelector('a[href^="https://wa.me"]');
if (waBtn) {
  waBtn.addEventListener('mouseenter', () => {
    waBtn.style.transform = 'scale(1.09)';
  });
  waBtn.addEventListener('mouseleave', () => {
    waBtn.style.transform = '';
  });
}