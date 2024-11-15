import { products } from "./products.js"


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
             R${product.price}

            </span>
            <div class="add-to-cart-div">
                <button class="add-to-cart-button" data-product-id = "${product.id}">
                    Add to cart
                </button>

            </div>
        </div>

    </div>
  
  
  
  
  `
  //console.log(html)
  productsHtml += html
})

document.querySelector('.products-grid').innerHTML = productsHtml
