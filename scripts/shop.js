import { products } from "./products.js"
import { addToCart } from "./cart.js"
import { headerDisplay } from "./homepage.js"


headerDisplay()

let productsHtml =''
products.forEach((product)=>{
  let html =
  `
  <div class="product-container" >
        <div class="item-image-container">
            <img class="item-image" src="${product.image}">

        </div>
        <div class="information-container">
            <span class="item-name">
                ${product.name}
            </span>
            <span class="item-price">
             R${(product.price).toFixed(2)}

            </span>
            <div class="add-to-cart-div">
                <button class="add-to-cart-button" data-product-id = "${product.id}">
                    Add to cart
                </button>

            </div>
        </div>

    </div>
  
  
  
  
  `
  productsHtml += html
})

document.querySelector('.products-grid').innerHTML = productsHtml


    
document.querySelectorAll('.add-to-cart-button').forEach((button)=>{
    button.addEventListener('click', ()=>{
    const productId = button.dataset.productId
    addToCart(productId)
    button.classList.add('green')
    button.innerHTML = `Added Success &#10004;`
    setTimeout(()=>{
        button.innerHTML = `Add to Cart`
        button.classList.remove('green')
    },900)
    })


   })
