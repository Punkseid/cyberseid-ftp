const mobileMenu = document.querySelector('.mobile-menu');
const rspMenu = document.querySelector('.responsive-menu-mobile');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    rspMenu.classList.toggle('active');
})
