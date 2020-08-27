function headerScroll() {
    let head = document.querySelectorAll(".scroll");
    document.onscroll = function () {
        for (let i = 0; i < head.length; i++) {
            if (document.documentElement.scrollTop > 670) {
                head[i].classList.add("active-scroll")
            } else {
                head[i].classList.remove("active-scroll")
            }
        }
    }
}

headerScroll();

function slide_box() {
    let slide = document.querySelector(".everyone-container-slide").children;

    function addClassSlide0() {
        slide[0].classList.add("slid-top")
    }

    function addClassSlide1() {
        slide[1].classList.add("slid-top")
    }

    function addClassSlide2() {
        slide[2].classList.add("slid-top")
    }

    function addClassSlide3() {
        slide[3].classList.add("slid-top")
    }

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 370) {
            setTimeout(addClassSlide3, 500);
            setTimeout(addClassSlide2, 1000);
            setTimeout(addClassSlide1, 1500);
            setTimeout(addClassSlide0, 2000);
        }
    }
}

slide_box();

function testimonials_box() {
    let testemonials = document.querySelector(".testimonials-container").children;

    function addClassTestemonial0() {
        testemonials[0].classList.add("testemonal-left")
    }

    function addClassTestemonial1() {
        testemonials[1].classList.add("testemonal-right")
    }

    function addClassTestemonial2() {
        testemonials[2].classList.add("testemonal-left")
    }

    function addClassTestemonial3() {
        testemonials[3].classList.add("testemonal-right")
    }

    document.onscroll = function () {
        if (document.documentElement.scrollTop > 2700) {
            setTimeout(addClassTestemonial0, 500);
            setTimeout(addClassTestemonial1, 1000);
            setTimeout(addClassTestemonial2, 1500);
            setTimeout(addClassTestemonial3, 2000);

        }
    }
}

testimonials_box();

