function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar');

    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Add click event listener to portfolio items
document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

// Add click event listener to the navigation links
document.querySelectorAll('.nav__link a').forEach(link => {
    link.addEventListener('click', (event) => {
        const target = link.getAttribute('href');
        if (target && target.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.querySelector(target);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (target && !target.startsWith('http')) {
            event.preventDefault();
            window.location.href = target;
        }
    });
});

