// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav');
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Portfolio Tabs Interactivity
const tabButtons = document.querySelectorAll('.tab-btn');
const galleries = document.querySelectorAll('.portfolio-gallery');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and galleries
    tabButtons.forEach(b => b.classList.remove('active'));
    galleries.forEach(g => g.classList.remove('active'));
    // Add active class to clicked button and corresponding gallery
    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    const targetGallery = document.getElementById(targetId);
    if(targetGallery) {
      targetGallery.classList.add('active');
    }
  });
});

// Lightbox for portfolio images
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lbImg');
const lightboxClose = document.getElementById('lbClose');
const lightboxImages = document.querySelectorAll('.lightbox-img');

lightboxImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxOverlay.style.display = 'flex';
  });
});

if(lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightboxOverlay.style.display = 'none';
  });
}

// Also allow clicking outside the image to close the lightbox
if(lightboxOverlay) {
  lightboxOverlay.addEventListener('click', (e) => {
    if(e.target === lightboxOverlay) {
      lightboxOverlay.style.display = 'none';
    }
  });
}

// Optional: Basic form validation feedback (HTML validation covers required fields)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Here you could add custom validation or a confirmation message
    // For now, just a console log for demonstration
    console.log('Contact form submitted');
    // Note: In a real scenario, you'd handle form submission to email or server here.
  });
}
