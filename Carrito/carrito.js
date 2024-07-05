document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const totalDisplay = document.getElementById('total');
    let cart = [];

    fetch('productos.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('col-md-4', 'product');
                productDiv.innerHTML = `
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al Carrito</button>
                        </div>
                    </div>
                `;
                productList.appendChild(productDiv);
            });
        });

    window.addToCart = function(productId) {
        fetch('productos.json')
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);
                if (product) {
                    cart.push(product);
                    updateCart();
                }
            });
    };

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('col-md-12', 'cart-item');
            cartItemDiv.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">$${item.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
            cartList.appendChild(cartItemDiv);
            total += item.price;
        });
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }
});