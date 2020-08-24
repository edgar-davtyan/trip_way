function headerScroll() {
    let head = document.querySelectorAll(".scroll");
    window.onscroll = function () {
        for (let i = 0; i <head.length ; i++) {
            if (document.documentElement.scrollTop > 670){
                head[i].classList.add("active_scroll")
            }else {
                head[i].classList.remove("active_scroll")
            }
        }
    }
}
headerScroll();
