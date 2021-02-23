const navBar = document.querySelector('.nav-content');
const icon = document.querySelector('.fa-bars');

icon.addEventListener('click', () => {
    navBar.classList.toggle('active');
});