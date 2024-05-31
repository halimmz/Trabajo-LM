function getCartFromStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

let cart = getCartFromStorage();

function addToCart(itemName, itemPrice, itemImage) {
    cart.push({ name: itemName, price: itemPrice, image: itemImage });
    updateCart();
}

function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("total");
    let total = 0;
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Precio: ${item.price} €</p>
                <button onclick="removeFromCart('${item.name}', ${item.price})">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(itemName, itemPrice) {
    cart = cart.filter(item => item.name !== itemName || item.price !== itemPrice);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function toggleCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.classList.toggle("open");
}

// Cargar el carrito al cargar la página
window.addEventListener('load', updateCart);