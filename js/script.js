import { renderer as catalogRenderer } from "./renderer.mjs";
document.getElementById('burger_open_element').addEventListener('click', function (e) {
    e.preventDefault();
    const burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('open');
});

const closeButton = document.querySelector('.burger img');

closeButton.addEventListener('click', function () {
    const burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.remove('open');
});

document.querySelectorAll('.burger_item_element').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('active');
        }
    });
});
catalogRenderer.fetchProducts();
const catalogTemplate = catalogRenderer.render();

const features = document.querySelector(".features__cards--catalog");

if (features) features.innerHTML = catalogTemplate;