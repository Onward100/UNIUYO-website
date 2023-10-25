/* Header slider js*/
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-control.prev');
const nextButton = document.querySelector('.slider-control.next');

let currentIndex = 0;

function moveSlider(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click', () => moveSlider(-1));
nextButton.addEventListener('click', () => moveSlider(1));

/*  */

