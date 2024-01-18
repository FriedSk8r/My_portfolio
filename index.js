function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar');

    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}