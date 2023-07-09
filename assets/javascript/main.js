$(document).ready(function () {
    var current_year = new Date().getFullYear()
    document.getElementById('copyright_year').innerHTML = current_year
})

function navbarToggle(x) {
    x.classList.toggle("change");
}
document.getElementById("goToTop").addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTop();
});

function scrollToTop() {
    window.scrollTo(0, 0);
}
window.addEventListener("load", function () {
    var loader = document.getElementById("loader-wrapper");
    loader.style.display = "none";
});