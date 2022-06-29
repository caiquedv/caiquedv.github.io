const Dqs = (el)=>document.querySelector(el);
const Dqsa = (el)=>document.querySelectorAll(el);

// Initial Data - scroll

const Btn = Dqs('.scrollbtn');

// Events

window.addEventListener('scroll', scrollTop);

// Functions

function scrollTop() {
window.scrollY > 100 ? (Btn.style.display = 'block') : (Btn.style.display = 'none');
}

function subirTela() {
    window.scrollTo({
        top: 0
    });
}

// End

// Initial Data - slider

let totalSlides = Dqsa('.slide').length;
let currentSlide = 0;

Dqs('.slider').style.width = `calc(100% * ${totalSlides})`;

function goPrev() {
    --currentSlide;
    if(currentSlide < 0) {
        currentSlide = totalSlides -1
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > totalSlides - 1) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = Dqs('.slide').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    Dqs('.slider').style.marginLeft = `-${newMargin}px`;
}