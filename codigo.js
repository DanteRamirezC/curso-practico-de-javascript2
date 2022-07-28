const navBarEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamb = document.querySelector(".menu");
const carShop = document.querySelector(".carrito");
const card = document.querySelector(".product-detail")


navBarEmail.addEventListener("click", alternarDesktopMenu);
menuHamb.addEventListener("click", alternarMobileMenu);
carShop.addEventListener("click", alternarProductCard)

function alternarMobileMenu() {
    mobileMenu.classList.toggle("inactive__mobile-menu");
}
function alternarDesktopMenu() {
    deskTopMenu.classList.toggle("inactive");
}
function alternarProductCard() {
    const isMobileClose = mobileMenu.classList.contains("inactive__mobile_menu");

    if(!isMobileClose) {
        mobileMenu.classList.add("inactive__mobile_menu")
    }

    card.classList.toggle("inactive__product-detail")
}