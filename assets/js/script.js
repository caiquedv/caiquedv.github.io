const Dqs = (el)=>document.querySelector(el);
const Dqsa = (el)=>document.querySelectorAll(el);

// Initial Data - Scroll

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

// Events

Dqs('.slider').style.width = `calc(100% * ${totalSlides})`;

// Functions

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

// End

// Initial Data - Menu mobile opener

let menuArea = Dqs("nav");
let headerSize = document.querySelector('header').clientWidth;
// Events

if(headerSize <= 820) {
    menuArea.addEventListener('click', () => {
        menuArea.style.width = '0px';
        document.querySelector('#checkbox-menu').checked = false;
    });
};


// Functions

function menuToogle(){
    menuArea.style.width == '80vw' ? menuArea.style.width = '0px' : menuArea.style.width = '80vw';    
}

// End  