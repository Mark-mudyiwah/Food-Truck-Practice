 import { addToCart } from "../cart.js";
import { products } from "../products.js";

export function searchItem(searchWord) {
    // Convert the search word to lowercase for case-insensitive comparison
    const lowerCaseSearchWord = searchWord.toLowerCase();

    // Filter products that have matching keywords (case-insensitive)
    const queryItem = products.filter((product) => {
        return product.keywords.some((keyword) =>
            keyword.toLowerCase().includes(lowerCaseSearchWord)
        );
    });

    return queryItem; // Return the filtered products
}

export function searchProduct(){
// Handle search input and update URL
const searchInput = document.querySelector('.js-search-input');
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchWord = searchInput.value.trim();
        if (searchWord) {
            // Update the URL with the query parameter
            window.location.href = `shop.html?query=${searchWord}`;
        }
    }
})
 };
 
 
 export function featuredProductsHTML() {
    // Initialize the HTML string
    let html = '';

    // Loop through products and filter for those with a price of 40
    products.forEach((product) => {
        if (product.type === 'featured') {
            // Append the HTML for each matching product
            html += `
                <div class="product-container">
       <div class="image-container js-image-container" data-product-id="${product.id}">
           <img class="product-image" src=" ${product.image}">
    
    
       </div>
       <div class="product-infomation">
           <div class="product-name">
               ${product.name}
           </div>
           <div class="product-price">
             R${product.price.toFixed(2)}
    
           </div>
           <div  class="add-to-cart-container">
               <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">
                   Add to Cart
               </button>
    
           </div>
    
       </div>
    
    </div>
        
            `;
        }
    });

    // Update the featured items container with the generated HTML
    const featuredItemsDiv = document.querySelector('.js-featured-items-div');
    if (featuredItemsDiv) {
        featuredItemsDiv.innerHTML = html;
    } else {
        console.error('Featured items container not found!');
    }

    document.querySelectorAll('.js-add-to-cart').forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            const productId = btn.dataset.productId
            
             addToCart(productId)
             btn.style.backgroundColor= "green"
            btn.innerHTML = `Added Successfully &#10004;`;
            setTimeout(() => {
                btn.innerHTML= `Add to Cart`;
                btn.style.backgroundColor = "";
            }, 900);
         })
    })  

    document.querySelectorAll('.js-image-container').forEach((img)=>{
        img.addEventListener('click',()=>{
            const productId = img.dataset.productId
            window.location.href=`detailed-view.html?productId=${productId}`
            console.log(productId)
    
        })
     })

}


