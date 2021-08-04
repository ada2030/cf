
var hamburger = document.querySelector(".js-hamburger");
var menuMobile = document.querySelector(".js-main-menu");

if(menuMobile) {
    menuMobile.classList.add("hidden");
    hamburger.addEventListener("click", function (evt) {
        evt.preventDefault();
        hamburger.classList.toggle("open");
        menuMobile.classList.toggle("open");
    });
}