
// Pour la partie de Darkmode et light mode
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Light Mode';
        toggleButton.style.backgroundColor = "black";
        toggleButton.style.Color = "white";
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Dark Mode';
       
    }
});

// Ajout paragraphe de la partie de service 
const service = document.getElementById('service');
let exist = false;

service.addEventListener('click', () => {
  if (exist) {
    const liste = document.querySelector('#liste');
    liste.remove();
    exist = false;
  } else {
    const liste = document.createElement('ul'); 
    liste.id = 'liste';

    const services = [
      "Photographie de la nature",
      "Photographie d'événements",
      "Portraits",
      "Retouche photo"
    ];

    services.forEach(service => {
      const item = document.createElement('li'); 
      item.textContent = service;
      liste.appendChild(item);
    });

    service.appendChild(liste); 
    exist = true;
  }
});
    
  

//     //light box
//     const galleryImages = document.querySelectorAll('.gallery-img');
// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.getElementById('lightbox-img');
// const closeLightbox = document.getElementById('close-lightbox');

// galleryImages.forEach(img => {
//   img.addEventListener('click', () => {
//     lightboxImg.src = img.src;
//     lightbox.style.display = 'block';
//   });
// });

// closeLightbox.addEventListener('click', () => {
//   lightbox.style.display = 'none';
// });

// // Close lightbox when clicking outside the image
// lightbox.addEventListener('click', (e) => {
//   if (e.target === lightbox) {
//     lightbox.style.display = 'none';
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("button[aria-controls='mobile-menu']");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      
      menuButton.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
  });
});
