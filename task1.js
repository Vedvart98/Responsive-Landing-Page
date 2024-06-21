document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) { // Change threshold as needed
        navbar.classList.add('scrolled');
    } 
    else {
        navbar.classList.remove('scrolled');
    }
});
navbar.addEventListener('mouseenter', function () {
    navbar.classList.add('hovered');
});

navbar.addEventListener('mouseleave', function () {
    navbar.classList.remove('hovered');
    });
});
