import { getProduct } from "./products.js"
import { addToCart } from "./cart.js"
import { headerDisplay } from "./utils/header.js"
import { searchProduct} from "./utils/searchQuery.js"
headerDisplay()
searchProduct()


const url = new URL(window.location.href)

const productId = url.searchParams.get('productId')

 const product = getProduct(productId)

 const productImages = [product.image,product.image1,product.image2,product.image3]
 

function productHTML(product) {
    let html = `
        <div class="viewed-image-container">
            <img class="viewed-product-image js-product-image" src="${product.image}">
        </div>
        
        <div class="viewed-product-infomation">
            <div class="next-buttons">
                <span class="previous-button js-prev-btn">
                    <img class="prev-icon" src="images/header-images/prev-icon.png"> 
                </span>
                <span class="next-button js-next-btn">
                    <img class="next-icon" src="images/header-images/next-icon.png"> 
                </span> 
            </div>
            
            <span class="viewed-product-name">${product.name}</span>
            <span class="viewed-product-info">${product.info}</span>
        </div>
        
        <span class="viewed-item-price">R${product.price.toFixed(2)}</span>
        
        <div class="viewed-add-to-cart-container">
            <button class="viewed-add-to-cart-button js-add-to-cart">
                Add item to Cart
            </button>
        </div>
    `;
    return html;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.js-viewed-item-container').innerHTML = productHTML(product);

     const addBtn = document.querySelector('.js-add-to-cart')
    addBtn.addEventListener('click', () => {
        addToCart(productId);
        addBtn.innerHTML = "Added Successfully &#10004"
        addBtn.style.backgroundColor = "green"
        setTimeout(()=>{
            addBtn.innerHTML= "Add item to Cart"
            addBtn.style.backgroundColor =""
        },900)
    });

    // Manage image cycling
    let currentImageIndex = 0;

    document.querySelector('.js-next-btn').addEventListener('click', () => {
        const imageElement = document.querySelector('.js-product-image');
        currentImageIndex = (currentImageIndex + 1) % productImages.length;
        imageElement.src = productImages[currentImageIndex];
    });

    document.querySelector('.js-prev-btn').addEventListener('click', () => {
        const imageElement = document.querySelector('.js-product-image');
        currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
        imageElement.src = productImages[currentImageIndex];
    });
});
