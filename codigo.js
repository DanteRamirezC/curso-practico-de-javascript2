const navBarEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamb = document.querySelector(".menu");
const carShop = document.querySelector(".carrito");
const card = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const cardAsideContainer = document.querySelector(".product-shop-card");
const closeAsideContainer = document.querySelector(".product-shop-card-close");

cardsContainer.addEventListener("click", openCard);
closeAsideContainer.addEventListener("click", closeCard);

navBarEmail.addEventListener("click", alternarDesktopMenu);
menuHamb.addEventListener("click", alternarMobileMenu);
carShop.addEventListener("click", alternarProductCard);

function openCard() {
    const isMobileClose = mobileMenu.classList.contains("inactive__mobile-menu");
    if(!isMobileClose) {
        mobileMenu.classList.add("inactive__mobile-menu")
    }
    const isDeskTopClose = card.classList.contains("inactive")
    if(!isDeskTopClose) {
        deskTopMenu.classList.add("inactive")
    }
    const isCardClose = card.classList.contains("inactive__product-detail")
    if(!isCardClose) {
        card.classList.add("inactive__product-detail")
    }
    cardAsideContainer.classList.remove("inactive");
}
function closeCard() {
    cardAsideContainer.classList.add("inactive");
}

function alternarMobileMenu() {
    const isCardClose = card.classList.contains("inactive__product-detail")
    if(!isCardClose) {
        card.classList.add("inactive__product-detail")
    }
    const isCardAsideContainer = cardAsideContainer.classList.contains("inactive");
    if(!isCardAsideContainer) {
        cardAsideContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive__mobile-menu");
}
function alternarDesktopMenu() {
    const isCardClose = card.classList.contains("inactive__product-detail")
    if(!isCardClose) {
        card.classList.add("inactive__product-detail")
    }
    const isCardAsideContainer = cardAsideContainer.classList.contains("inactive");
    if(!isCardAsideContainer) {
        cardAsideContainer.classList.add("inactive");
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
    const isCardAsideContainer = cardAsideContainer.classList.contains("inactive");
    if(!isCardAsideContainer) {
        cardAsideContainer.classList.add("inactive");
    }

    card.classList.toggle("inactive__product-detail")
}

// product-list //
const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "celular",
    price: 1500,
    image: "https://res.cloudinary.com/walmart-labs/image/upload/v1602113572/mg/images/categorias/d-celulares/category-smartphones.jpg"
});
productList.push({
    name: "televisor",
    price: 11000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(arr) {
    for(product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const image = document.createElement("img");
        image.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const figure = document.createElement("figure");
        const figureImage = document.createElement("img");
        figureImage.setAttribute("src", "./icons/bt_add_to_cart.svg")

        figure.appendChild(figureImage);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);

        productCard.appendChild(image);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);