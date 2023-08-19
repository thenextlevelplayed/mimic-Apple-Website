var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

var appendNumber = 4;
var prependNumber = 1;
document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
    });
document.querySelector(".prepend-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
});
document.querySelector(".append-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
});
document.querySelector(".append-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
});

// pop up

function openAccountInfo(){
    document.getElementById("popupForm-accountinfo").style.display = "block";
};
function closeForm(){
    document.getElementById("popupForm-accountinfo").style.display = "none";
    document.getElementById("popupForm-email").style.display = "none";
    document.getElementById('popupForm-password').style.display = "none";
    document.getElementById('popupForm-phone').style.display = "none";



};
function email(){
    document.getElementById("popupForm-email").style.display = "block";

}
function password(){
    document.getElementById('popupForm-password').style.display = "block";
}
function phone(){
    document.getElementById('popupForm-phone').style.display = "block";

}