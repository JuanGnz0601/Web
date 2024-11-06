let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const slider = document.querySelector('.slider');

function updateSlidePosition() {
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlidePosition();
}

let slideInterval = setInterval(() => moveSlide(1), 5000);

slider.addEventListener('mouseover', () => clearInterval(slideInterval));
slider.addEventListener('mouseout', () => {
    slideInterval = setInterval(() => moveSlide(1), 5000);
});


