import { headerDisplay } from "./homepage.js";
import { getProduct } from "./products.js";

headerDisplay()


 export const cart = JSON.parse(localStorage.getItem('cart'))
 ||[
    {
      productId:'5hgf-ty67-dv4c',
      quantity:2
    },
    {
      productId:'3jkl-u78g-bn9a',
      quantity:2
    },

]

export function addToCart(productId){
    let matchingItem;
    
    cart.forEach((item)=>{
     if(item.productId === productId){
     matchingItem = item
     }
    })
    if(matchingItem){
     matchingItem.quantity++
    }
    if(!matchingItem){
   
     cart.push(
       {
         productId,
         quantity: 1,
       }
     )
    }

   localStorage.setItem('cart',JSON.stringify(cart))
   renderCartQuantity()
   //console.log(localStorage)
  }

  export function renderCartItemsHTML(){
    let cartSummaryHTML =''
    cart.forEach((cartItem)=>{
      const productId = cartItem.productId
      const matchingProduct = getProduct(productId)
  
      cartSummaryHTML +=`
         <div class="product-container">
              <div class="item-image-container">
                  <div>
                      <img class="item-image" src="${matchingProduct.image}">
                  </div>
              </div>
              <div class="item-info-container">
                  <div class="item-name">${matchingProduct.name}</div>
                  <div class="item-price">R${matchingProduct.price}</div>
                  <div class="item-quantity">Quantity : ${cartItem.quantity}</div>
                  <div class="update-quantity-buttons">
                      <button class="update-button">Update Quantity</button>
                     
                  </div>
  
              </div>
              <div class="delete-item-container">
                  <span class="delete-item-span">
                      <img class="delete-icon" src="images/header-images/delete-icon.png">
                  </span>
  
              </div>
  
          </div>
      
      `
       
     document.querySelector('.js-products-grid').innerHTML =cartSummaryHTML
     }) 
 
}
 export function renderCartQuantity(){
  let totalCartQuantity = 0
  cart.forEach((cartItem)=>{
    totalCartQuantity += cartItem.quantity
  })
   document.querySelector('.js-cart-quantity-container').innerHTML =totalCartQuantity
  
}
 renderCartQuantity()

 export function renderOrderSummary(){

  let totalCartQuantity = 0
  let totalCost = 0

  cart.forEach((cartItem)=>{
    const productId = cartItem.productId
    const matchingProduct = getProduct(productId)
   totalCartQuantity += cartItem.quantity
   const itemCost = matchingProduct.price
   totalCost += itemCost
   //console.log(itemCost)
  
  
  })

  const totalBeforeTax = totalCost + 30
  const tax = 0.05*totalBeforeTax
  const orderTotal = totalBeforeTax + tax

  let orderSummaryhtml = `
   <span class="order-summary-text">Order Summary</span>
        <div>
            <span>Items(${totalCartQuantity})</span>
            <span>${totalCost.toFixed(2)}</span>
        </div>
        <div>
            <span>Delivery Charge:</span>
            <span>30.00</span>

        </div>
        <div>
            <span>Total Before tax:</span>
            <span class="total-before-tax">R  ${totalBeforeTax.toFixed(2)}</span>
        </div>
        <div>
            <span>Estimated Tax(5%):</span>
            <span>${tax.toFixed(2)}</span>
        </div>
        <div class="order-total-container">
            <span>Order Total:</span>
            <span>R ${orderTotal.toFixed(2)}</span>
        </div>

  `
  document.querySelector('.js-payment-summary').innerHTML = orderSummaryhtml

  document.querySelector('.js-subtotal-amount-span').innerHTML =  orderTotal.toFixed(2)

  document.querySelector('.js-cart-item-count').innerHTML = totalCartQuantity
  document.querySelector('.js-subtotal-amount-span').innerHTML =  `R ${orderTotal.toFixed(2)}`
 }

  
 


  

 
  

 

   


   

   