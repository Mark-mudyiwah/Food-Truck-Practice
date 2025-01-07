import { products } from "./products.js";
import { addToCart } from "./cart.js";
import { headerDisplay } from "./utils/header.js";
import { searchItem ,searchProduct} from "./utils/searchQuery.js";

headerDisplay()

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
                <span class="item-price">R${product.price.toFixed(2)}</span>
                <div class="add-to-cart-div">
                    <button class="add-to-cart-button" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        `;
        productsHtml += html;
    });

    // Update the product grid with filtered products
    document.querySelector('.products-grid').innerHTML = productsHtml;

    // Reattach event listeners for the "Add to Cart" buttons
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

// Extract the `query` parameter from the URL
const url = new URL(window.location.href);
const query = url.searchParams.get('query');

// Check if the query exists and handle search
if (query && query.trim() !== '' && query.toLowerCase() !== 'all products') {
    // Perform the search
    const filteredProducts = searchItem(query);
    
    if (filteredProducts.length > 0) {
        // Display filtered products if matches are found
        updateProductDisplay(filteredProducts);
    } else {
        // Display all products if no matches are found
        updateProductDisplay(products);
    }
} else {
    // If query is empty or 'all products', display all products
    updateProductDisplay(products);
}
// Handle search input and update URL
 searchProduct()
