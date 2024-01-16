document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
    });

    // Close the navigation menu when a nav link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('nav-open');
        });
    });
});