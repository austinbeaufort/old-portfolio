
    function scrollPage(element, to, duration) {
        if (duration <= 0) return;
        let difference = to - element.scrollTop;
        let perTick = difference / duration * 10;

        setTimeout(() => {
            element.scrollTop = element.scrollTop + perTick;
            if(element.scrollTop === to) return;
            scrollPage(element, to, duration - 10);
        }, 10);
    }


let initialArrow = document.querySelector('.initial-arrow');
let arrow1 = document.querySelector('.arrow1');
let project1 = document.querySelector('#project1');
let arrow2 = document.querySelector('.arrow2');
let project2 = document.querySelector('#project2');
let project3 = document.querySelector('#project3');


/* ----------FLIPCARDS ------------ */

let flip1 = document.querySelector('.flip1');
let flip2 = document.querySelector('.flip2');
let flip3 = document.querySelector('.flip3');


function touch(event) {
    event.preventDefault();
    this.classList.toggle('hover-effect');
}

document.addEventListener('DOMContentLoaded', function() {
    flip1.addEventListener('touchstart', touch);
    flip1.addEventListener('touchend', touch);
    flip2.addEventListener('touchstart', touch);
    flip2.addEventListener('touchend', touch);
    flip3.addEventListener('touchstart', touch);
    flip3.addEventListener('touchend', touch);
});




initialArrow.addEventListener('click', function() {
    scrollPage(document.documentElement, project1.offsetTop, 600);
});

arrow1.addEventListener('click', function() {
    scrollPage(document.documentElement, project2.offsetTop, 600);
});

arrow2.addEventListener('click', function() {
    scrollPage(document.documentElement, project3.offsetTop, 600);
});





