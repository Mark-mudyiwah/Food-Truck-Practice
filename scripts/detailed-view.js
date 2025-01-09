import { getProduct } from "./products.js"
import { addToCart } from "./cart.js"
import { headerDisplay } from "./utils/header.js"
import { searchProduct} from "./utils/searchQuery.js"
headerDisplay()
searchProduct()


const url = new URL(window.location.href)

const productId = url.searchParams.get('productId')

 const product = getProduct(productId)

 function productHTML(product){
    let html = `
        <div class="viewed-image-container">
        <img class="viewed-product-image" src="${product.image}">
    </div>
    
    <div class="viewed-product-infomation">
        <div class="next-buttons">
            <span class="previous-button js-prev-btn">
                <img class="prev-icon" src="images/header-images/prev-icon.png"> 
            </span>
            <span  class="next-button js-next-btn">
                <img class="next-icon" src="images/header-images/next-icon.png"> 
            </span> 
        </div>
        
        <span  class="viewed-product-name">
           ${product.name}
        </span>

        <span  class="viewed-product-info">
            ${product.info}
        </span>
    </div>
    <span class="viewed-item-price">R${product.price.toFixed(2)}</span>

    <div class="viewed-add-to-cart-container">
    <button class="viewed-add-to-cart-button js-add-to-cart">
        Add item to Cart
    </button>

    </div>

    `
    return html
 }

 document.querySelector('.js-viewed-item-container')
 .innerHTML = productHTML(product)
document.querySelector('.js-add-to-cart')
.addEventListener('click',()=>{
    addToCart(productId)
})


 

 