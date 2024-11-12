// https://fakestoreapi.com/products API

const menuMobile = document.getElementById("menu-mobile");

menuMobile.addEventListener('click', () => {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle('open')
    menuMobile.classList.toggle('active')
})