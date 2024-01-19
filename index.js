function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar');

    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Add click event listener to portfolio items
const clickableItems = document.querySelectorAll('.clickable');
clickableItems.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

// Add click event listener to the Home link
const homeLink = document.querySelector('.nav__link a[href="#home"]');
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html#home';
});

// Add click event listeners to other links
const servicesLink = document.querySelector('.nav__link a[href="#services"]');
const aboutLink = document.querySelector('.nav__link a[href="#about"]');
const workLink = document.querySelector('.nav__link a[href="#work"]');

servicesLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html#services';
});

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html#about';
});

workLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html#work';
});