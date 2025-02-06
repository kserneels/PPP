// carousel.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');

// Create dots dynamically
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        if (i === currentSlide) {
            dots[i].classList.add('active');
        }
    }
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 600; // Move the carousel
    document.getElementById('carousel').style.transform = `translateX(${offset}px)`;
    updateDots();
}

function autoSlide() {
    moveSlide(1);
}

// Auto slide every 5 seconds
setInterval(autoSlide, 5000);

// Initialize carousel
createDots();
updateCarousel();
