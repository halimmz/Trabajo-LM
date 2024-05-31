function addToCart() {
    // Obtén la información del producto
    let productName = document.querySelector('.product-details h2').innerText;
    let productPrice = document.querySelector('.product-details h3').innerText;
    let productImage = document.querySelector('.product-images img').src;

    // Crea un objeto con la información del producto
    let product = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Agrega el producto al carrito
    let cartItems = document.querySelector('.cart-items');
    let item = document.createElement('div');
    item.innerHTML = `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="item-info">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
        </div>
    `;
    cartItems.appendChild(item);
}