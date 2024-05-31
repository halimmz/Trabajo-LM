
document.addEventListener("DOMContentLoaded", function() {
    // Lista de todos los productos
    const allProducts = [
        {
            href: "Casual 1.html",
            src: "../Imagenes/casual 1.png",
            alt: "Reloj Casual 1",
            brand: "Casio",
            description: "MTP-B145D-3AVEF Reloj Casio Timeless Collection Esfera Verde",
            price: "70,99€"
        },
        {
            href: "Casual 2.html",
            src: "../Imagenes/casual 2.png",
            alt: "Reloj Casual 2",
            brand: "Tommy Hilfiger",
            description: "Reloj de hombre Tommy Hilfiger, Becker 1710512 de malla de acero",
            price: "150€"
        },
        {
            href: "Casual 3.html",
            src: "../Imagenes/casual 3.png",
            alt: "Reloj Casual 3",
            brand: "Casio",
            description: "Reloj de hombre de Casio Collection A158WEA-1EF Vintage",
            price: "39,99€"
        },
        {
            href: "Casual 4.html",
            src: "../Imagenes/casual 4.png",
            alt: "Reloj Casual 4",
            brand: "Lotus",
            description: "Reloj de hombre 18816/1 Minimalist de acero azul",
            price: "99€"
        },
        {
            href: "Casual 5.html",
            src: "../Imagenes/casual 5.png",
            alt: "Reloj Casual 5",
            brand: "Lacoste",
            description: "Reloj de hombre Lacoste de silicona negro",
            price: "99€"
        },
        {
            href: "Casual 6.html",
            src: "../Imagenes/casual 6.png",
            alt: "Reloj Casual 6",
            brand: "Casio",
            description: "Reloj de hombre Casio Collection MRW-200HD-1BVEF de acero",
            price: "49,90€"
        },
        {
            href: "Casual 7.html",
            src: "../Imagenes/casual 7.png",
            alt: "Reloj Casual 7",
            brand: "Festina",
            description: "Reloj de hombre F20426/2 Acero Clasico de piel azul",
            price: "79€"
        },
        {
            href: "Casual 8.html",
            src: "../Imagenes/casual 8.png",
            alt: "Reloj Casual 8",
            brand: "Calypso",
            description: "Reloj de hombre K5753/3 Street Style de caucho negro",
            price: "29€"
        },
        {
            href: "Lujo 1.html",
            src: "../Imagenes/lujo 1.png",
            alt: "Reloj de Lujo 1",
            brand: "Longines",
            description: "Reloj de hombre Longines Master Collection L29094783 automático de piel marrón",
            price: "2.850€"
        },
        {
            href: "Lujo 2.html",
            src: "../Imagenes/lujo 2.png",
            alt: "Reloj de Lujo 2",
            brand: "Perrelet",
            description: "Reloj de hombre A3038/1 Turbine Specialities de caucho negro",
            price: "8.380€"
        },
        {
            href: "Lujo 3.html",
            src: "../Imagenes/lujo 3.png",
            alt: "Reloj de Lujo 3",
            brand: "Baume & Mercier",
            description: "Reloj de hombre Riviera M0A10660 automático de caucho negro",
            price: "3.300€"
        },
        {
            href: "Smart 1.html",
            src: "../Imagenes/smart 1.png",
            alt: "Smartwatch 1",
            brand: "Samsung",
            description: "Samsung Galaxy Watch6 40mm Oro Bluetooth Smartwatch",
            price: "199€"
        },
        {
            href: "Smart 2.html",
            src: "../Imagenes/smart 2.png",
            alt: "Smartwatch 2",
            brand: "Apple",
            description: "Apple Watch SE2 GPS 40mm Aluminio Blanco estrella con correa Blanco estrella S/M",
            price: "259€"
        },
        {
            href: "Smart 3.html",
            src: "../Imagenes/smart 3.png",
            alt: "Smartwatch 3",
            brand: "Garmin",
            description: "Reloj smartwatch Forerunner 55",
            price: "229,99€"
        }
    ];

    // Selecciona 4 productos aleatorios sin repetir
    function getRandomProducts(products, count) {
        let shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Genera el HTML para los productos seleccionados
    function generateProductHTML(product) {
        return `
            <div class="product">
                <a href="${product.href}">
                    <img src="${product.src}" alt="${product.alt}">
                </a>
                <h3>${product.brand}</h3>
                <h4>${product.description}</h4>
                <p class="precio">${product.price}</p>
            </div>
        `;
    }

    // Renderiza los productos aleatorios en el DOM
    function renderRandomProducts() {
        const randomProducts = getRandomProducts(allProducts, 4);
        const similarWatchesGrid = document.getElementById('similar-watches-grid');
        similarWatchesGrid.innerHTML = randomProducts.map(generateProductHTML).join('');
    }

    // Inicializa la renderización
    renderRandomProducts();
});