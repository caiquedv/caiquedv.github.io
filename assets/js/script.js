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

// native validator

let validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');
        console.log(inputs)

        validator.clearErrors();

        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }

        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');

        if(rules !== null) {
            rules = rules.split('|');
            for(let k in rules) {
                let rDetails = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Vazio!';
                        }
                    break;
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'Inválido!';
                            }
                        }
                    break;
                }
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.style.fontSize = '12px'
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:() => {
        let inputs = form.querySelectorAll('input');
        for(let i=0;i<inputs.length;i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for(let i=0;i<errorElements.length;i++) {
            errorElements[i].remove();
        }
    }
};

let form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);