const openMenu = document.querySelector('.open-icon-menu');
const toggleMenu = document.getElementById('menu');
const closeMenu = document.querySelector('.close-icon-menu');

openMenu.addEventListener('click', () => {
        openMenu.style.display = 'none';
        toggleMenu.classList = 'menu open';
        closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block';
    toggleMenu.classList = 'menu';
    closeMenu.style.display = 'none'
})