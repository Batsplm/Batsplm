// scripts.js

// Función para mostrar la sección seleccionada en el menú
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Mostrar la sección de información solo si estamos en la sección "Inicio"
    const infoSection = document.getElementById('info');
    if (sectionId === 'inicio') {
        infoSection.style.display = 'block';
    } else {
        infoSection.style.display = 'none';
    }
}

// Función para cambiar la imagen principal en la galería y mostrar información adicional
function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    const mainInfo = document.getElementById('main-info');

    mainImage.style.opacity = 0; // Difuminar la imagen actual
    mainInfo.style.opacity = 0; // Difuminar el texto actual

    setTimeout(() => {
        mainImage.src = thumbnail.src; // Cambiar la imagen
        mainImage.alt = thumbnail.alt;
        mainInfo.innerHTML = thumbnail.getAttribute('data-info'); // Actualizar información con formato
        mainImage.style.opacity = 1; // Mostrar la nueva imagen
        mainInfo.style.opacity = 1; // Mostrar el nuevo texto
    }, 500);
}


// Configuración de la presentación de imágenes
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === slideIndex) {
            slide.classList.add("active");
        }
    });
    slideIndex = (slideIndex + 1) % slides.length; // Cambiar al siguiente slide
}

// Inicializar la presentación de diapositivas
setInterval(showSlides, 5000); // Cambia cada 5 segundos

// Función para aplicar efecto de desvanecimiento al desplazarse
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            element.classList.add("visible");
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
