
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

initialArrow.addEventListener('click', function() {
    scrollPage(document.documentElement, project1.offsetTop, 600);
});

arrow1.addEventListener('click', function() {
    scrollPage(document.documentElement, project2.offsetTop, 600);
});

arrow2.addEventListener('click', function() {
    scrollPage(document.documentElement, project3.offsetTop, 600);
});



initialArrow.addEventListener('touchstart', function() {
    scrollPage(document.documentElement, project1.offsetTop, 600);
});

arrow1.addEventListener('touchstart', function() {
    scrollPage(document.documentElement, project2.offsetTop, 600);
});

arrow2.addEventListener('touchstart', function() {
    scrollPage(document.documentElement, project3.offsetTop, 600);
});



