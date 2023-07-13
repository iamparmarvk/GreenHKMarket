// For copyright year
$(document).ready(function () {
    var current_year = new Date().getFullYear()
    document.getElementById('copyright_year').innerHTML = current_year
})

// For navbar toggler
function navbarToggle(x) {
    x.classList.toggle("change");
}
document.getElementById("goToTop").addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTop();
});

// For scroll to top
function scrollToTop() {
    window.scrollTo(0, 0);
}

// For loader
window.addEventListener("load", function () {
    var loader = document.getElementById("loader-wrapper");
    loader.style.display = "none";
});

// For password visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('passwordInput');
    var showPasswordIcon = document.getElementById('showPassIcon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordIcon.removeAttribute('class', 'fa fa-eye')
        showPasswordIcon.setAttribute('class', 'fa fa-eye-slash')
    } else {
        passwordInput.type = 'password';
        showPasswordIcon.removeAttribute('class', 'fa fa-eye-slash')
        showPasswordIcon.setAttribute('class', 'fa fa-eye')
    }
}
function toggleConfirmPasswordVisibility() {
    var confirmPasswordInput = document.getElementById('confirmPasswordInput');
    var showConfirmPassIcon = document.getElementById('showConfirmPassIcon')

    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        showConfirmPassIcon.removeAttribute('class', 'fa fa-eye')
        showConfirmPassIcon.setAttribute('class', 'fa fa-eye-slash')
    } else {
        confirmPasswordInput.type = 'password';
        showConfirmPassIcon.removeAttribute('class', 'fa fa-eye-slash')
        showConfirmPassIcon.setAttribute('class', 'fa fa-eye')
    }
}

// For product image
$('.gallery-product-img').click(function () {
    let currentImageUrl = $(this).attr('src');
    $('#main-image').css('opacity', 0);
    setTimeout(() => {
        $('#main-image').attr('src', currentImageUrl);
        $('#main-image').css('opacity', 1);
    }, 500);
});

// For thank you alert
$('#placeOrderBtn').click(function () {
    Swal.fire(
        'Thank you!',
        'Your order has been placed',
        'success'
    )
});