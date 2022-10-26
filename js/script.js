
//XS Header dropdown
const toggle = document.querySelector('.primary-nav-container .nav-toggle');
const primaryNav = document.querySelector('.primary-nav-container .nav');

console.log(primaryNav);

toggle.addEventListener('click', () => {
    console.log(primaryNav);
    primaryNav.classList.toggle('open');
})