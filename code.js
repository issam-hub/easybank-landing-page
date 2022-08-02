let burger = document.querySelector(".burger-toggle");
let navBar = document.querySelector(".header ul");
function navSlide() {
    burger.addEventListener("click", (e) => {
        navBar.classList.toggle("moveToOriginal");
        setTimeout(() => {
            navBar.classList.toggle("boxShadow");
        }, 400);
    });
}
let one = document.querySelector(".span1");
let two = document.querySelector(".span2");
let three = document.querySelector(".span3");
function burger2X() {
    burger.onclick = function () {
        two.classList.toggle("vanish");
        one.classList.toggle("flip1");
        three.classList.toggle("flip2");
    };
}

navSlide();
burger2X();
