document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const xMenu = document.getElementById('x-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.style.display = 'none';
        xMenu.style.display = 'block';

        // Change the background color of xMenu <a>
        const xMenuLink = xMenu.querySelector('a');
        xMenuLink.style.backgroundColor = '#D0312D';
        xMenuLink.style.color = '#ffff';
    });

    xMenu.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.style.display = 'block';
        xMenu.style.display = 'none';
    });
});
