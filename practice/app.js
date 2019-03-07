


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

let button = [...document.querySelectorAll('.fas')];
console.log(button);

// scrollTo(document.body, project1.offSetTop, 600);

