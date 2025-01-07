import { products } from "./products.js";
import { addToCart } from "./cart.js";
import { headerDisplay } from "./utils/header.js";
import { searchItem } from "./utils/searchQuery.js";

headerDisplay();

// Function to update the product display on the page
function updateProductDisplay(filteredProducts) {
    let productsHtml = '';
    filteredProducts.forEach((product) => {
        let html = `
        <div class="product-container">
            <div class="item-image-container">
                <img class="item-image" src="${product.image}">
            </div>
            <div class="information-container">
                <span class="item-name">${product.name}</span>
                <span class="item-price">R${(product.price).toFixed(2)}</span>
                <div class="add-to-cart-div">
                    <button class="add-to-cart-button" data-product-id="${product.id}">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        `;
        productsHtml += html;
    });

    // Update the product grid with filtered products
    document.querySelector('.products-grid').innerHTML = productsHtml;

    // Reattach the event listeners to the new buttons
    attachAddToCartEventListeners();
}

// Function to attach event listeners to "Add to Cart" buttons
function attachAddToCartEventListeners() {
    document.querySelectorAll('.add-to-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            button.classList.add('green');
            button.innerHTML = `Added Successfully &#10004;`;
            setTimeout(() => {
                button.innerHTML = `Add to Cart`;
                button.classList.remove('green');
            }, 900);
        });
    });
}

// Initially display all products
updateProductDisplay(products);

const searchInput = document.querySelector('.js-search-input');
console.log(searchInput);

searchInput.addEventListener('keydown', (event) => {
    const searchWord = searchInput.value;
    if (event.key === 'Enter') {
        // Call searchItem when Enter is pressed and update the display
        const filteredProducts = searchItem(searchWord);
        updateProductDisplay(filteredProducts); // Update the product display with filtered results
    searchInput.value = ''
    }
});
