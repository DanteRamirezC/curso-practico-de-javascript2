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
    const isCardClose = card.classList.contains("inactive__product-detail")
    if(!isCardClose) {
        card.classList.add("inactive__product-detail")
    }
    mobileMenu.classList.toggle("inactive__mobile-menu");
}
function alternarDesktopMenu() {
    const isCardClose = card.classList.contains("inactive__product-detail")
    if(!isCardClose) {
        card.classList.add("inactive__product-detail")
    }
 
    deskTopMenu.classList.toggle("inactive");
}
function alternarProductCard() {
    const isDeskTopClose = card.classList.contains("inactive")
    if(!isDeskTopClose) {
        deskTopMenu.classList.add("inactive")
    }
    const isMobileClose = mobileMenu.classList.contains("inactive__mobile-menu");
    if(!isMobileClose) {
        mobileMenu.classList.add("inactive__mobile-menu")
    }

    card.classList.toggle("inactive__product-detail")
}