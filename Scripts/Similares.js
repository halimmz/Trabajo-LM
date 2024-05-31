
    document.addEventListener("DOMContentLoaded", function() {
        // Lista de todos los productos
        const allProducts = [
            {
                href: "Casual 1 Mujer.html",
                src: "../Imagenes/casual 1 mujer.png",
                alt: "Reloj Casual 1",
                brand: "Fossil",
                description: "Reloj de mujer Heritage ME3228 Automático de acero inoxidable 2T/dorado",
                price: "237,30€"
            },
            {
                href: "Casual 2 mujer.html",
                src: "../Imagenes/casual 2 mujer.png",
                alt: "Reloj Casual 2",
                brand: "Michael kors",
                description: "Reloj de mujer Everest MK7212 cronógrafo de acero dorado",
                price: "349€"
            },
            {
                href: "Casual 3 mujer.html",
                src: "../Imagenes/casual 3 mujer.png",
                alt: "Reloj Casual 3",
                brand: "Viceroy",
                description: "Reloj de mujer de acero,5 atm, brazalete de acero, movimiento cuarzo",
                price: "89,00€"
            },
            {
                href: "Casual 4 mujer.html",
                src: "../Imagenes/casual 4 mujer.png",
                alt: "Reloj Casual 4",
                brand: "Casio",
                description: "Reloj de mujer Casio Collection MTP-1302PD-2A2VEF Classic",
                price: "59,90€"
            },
            {
                href: "Casual 5 Mujer.html",
                src: "../Imagenes/casual 5 mujer.png",
                alt: "Reloj Casual 5",
                brand: "Casio",
                description: "Reloj de mujer Casio Vintage AQ-230A-7DMQYES Vintage Edgy",
                price: "49.90€"
            },
            {
                href: "Casual 6 Mujer.html",
                src: "../Imagenes/casual 6 mujer.png",
                alt: "Reloj Casual 6",
                brand: "Timex",
                description: "Reloj Timex Originals TWG019000 Fairfield Gift Set",
                price: "34.95€"
            },
            {
                href: "Casual 7 Mujer.html",
                src: "../Imagenes/casual 7 mujer.png",
                alt: "Reloj Casual 7",
                brand: "Casio",
                description: "Reloj Casio Vintage LTP-1234PGL-7AEG",
                price: "54.90€"
            },
            {
                href: "Casual 8 Mujer.html",
                src: "../Imagenes/casual 8 mujer.png",
                alt: "Reloj Casual 8",
                brand: "Bering",
                description: "Reloj Bering Classic 11022-969",
                price: "79.95€"
            },
            {
                href: "Lujo 1 Mujer.html",
                src: "../Imagenes/lujo 1 mujer.png",
                alt: "Reloj de Lujo 1",
                brand: "Versace",
                description: "Reloj de mujer Stud Icon VE3C00222 de acero dorado",
                price: "1.140€"
            },
            {
                href: "Lujo 2 Mujer.html",
                src: "../Imagenes/lujo 2 mujer.png",
                alt: "Reloj de Lujo 2",
                brand: "Versace",
                description: "Reloj de mujer Medusa Alchemy VE6F00623 de acero dorado",
                price: "1.450€"
            },
            {
                href: "Lujo 3 Mujer.html",
                src: "../Imagenes/lujo 3 mujer.png",
                alt: "Reloj de Lujo 3",
                brand: "Jaguar",
                description: "Reloj de mujer J995/1 automático de acero multicolor",
                price: "845€"
            },
            {
                href: "Smart-watches 1 Mujer.html",
                src: "../Imagenes/smartwach 1 mujer.png",
                alt: "Smartwatch 1",
                brand: "Lotus",
                description: "Reloj de mujer 50001/A Smartwatch de acero rosa",
                price: "99€"
            },
            {
                href: "smart-watches 2 Mujer.html",
                src: "../Imagenes/smartwach 2 mujer.png",
                alt: "Smartwatch 2",
                brand: "Lotus",
                description: "Reloj de mujer 50036/1 Smartwatch de acero rosa",
                price: "109€"
            },
            {
                href: "smartwatches 3 Mujer.html",
                src: "../Imagenes/smartwach 3 mujer.png",
                alt: "Smartwatch 3",
                brand: "Tous",
                description: "Smartwatch T-Band Mesh con brazalete de acero y caja de aluminio dorado",
                price: "159€"
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
