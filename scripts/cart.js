import { headerDisplay } from "./homepage.js";
import { getProduct } from "./products.js";
import { getDeliveryOption,deliveryOptions } from "./delivery-options.js";

 

 export const cart = JSON.parse(localStorage.getItem('cart'))
 ||[
    {
      productId:'5hgf-ty67-dv4c',
      quantity:1
    },
    {
      productId:'3jkl-u78g-bn9b',
      quantity:1
    },
  {
    productId:'9abc-l56d-hg3f',
    quantity:2

  }
   

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
                  <div class="item-price">R${(matchingProduct.price).toFixed(2)}</div>
                  <div class="item-quantity">Quantity : ${cartItem.quantity}</div>
                  <div class="update-quantity-buttons">
                      <button class="update-button js-update-button" data-product-id = "${productId}">Update Quantity</button>
                      <input class = "quantity-update-input js-quantity-update-input js-quantity-${productId}" type = "number" min = "1" max ="100" data-product-id = "${productId}">
                      <button class ="save-quantity-button" data-product-id ="${productId}">Update</button>                
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
   
    });

     function showQuantityInput(productId,elementClass){
        document.querySelectorAll(elementClass).forEach((element)=>{
            const elementId = element.dataset.productId
           if(productId === elementId){
            element.classList.add('openIt')

           }

          
         })
        
     }

     function hideQuantityInput(productId,elementClass,quantity){

      
        document.querySelectorAll(elementClass)
        .forEach((element)=>{
            const elementId =element.dataset.productId
            if(elementId === productId){
                element.classList.remove('openIt')

            }

        })

     }
 

     document.querySelectorAll('.js-update-button')
     .forEach((button)=>{
        button.addEventListener('click',()=>{

         const productId = button.dataset.productId
         button.classList.add('closeIt')
         showQuantityInput(productId,'.js-quantity-update-input ,.save-quantity-button')

        });
     });

     document.querySelectorAll('.save-quantity-button')
     .forEach((button)=>{
        button.addEventListener('click',()=>{

          const productId = button.dataset.productId
          

             updateCartQuantity(productId)
             document.querySelectorAll('.js-update-button').forEach((button)=>{
              const  elementId = button.dataset.productId
                if(elementId === productId){
                    button.classList.remove('closeIt')
                }
             })

      

        })
       
     })
}



function updateCartQuantity(productId){
 const inputElement =  document.querySelector(`.js-quantity-${productId}`)
 let quantity = inputElement.value 
 quantity = parseInt(quantity.replace(/,/g,''),10)|| 1;
  cart.forEach((cartItem)=>{
     if(cartItem.productId=== productId){
        cartItem.quantity = quantity
        
   localStorage.setItem('cart',JSON.stringify(cart))

     }

     renderCartItemsHTML()
     renderOrderSummary()
     renderCartQuantity()
  })
return quantity
}


/* // Utility to toggle class for elements matching a condition
function toggleClassForElements(selector, condition, className, action) {
    document.querySelectorAll(selector).forEach((element) => {
        if (condition(element)) {
            element.classList[action](className);
        }
    });
}

// Show quantity input by adding a class
function showQuantityInput(productId, elementSelector) {
    toggleClassForElements(
        elementSelector,
        (element) => element.dataset.productId === productId,
        'openIt',
        'add'
    );
}

// Hide quantity input by removing a class
function hideQuantityInput(productId, elementSelector) {
    toggleClassForElements(
        elementSelector,
        (element) => element.dataset.productId === productId,
        'openIt',
        'remove'
    );
}

// Set up event listeners for update buttons
document.querySelectorAll('.js-update-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        button.classList.add('closeIt');
        showQuantityInput(productId, '.js-quantity-update-input, .save-quantity-button');
    });
});

// Set up event listeners for save buttons
document.querySelectorAll('.save-quantity-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        hideQuantityInput(productId, '.js-quantity-update-input, .save-quantity-button');
        toggleClassForElements(
            '.js-update-button',
            (btn) => btn.dataset.productId === productId,
            'closeIt',
            'remove'
        );
    });
});
 */

 export function renderCartQuantity(){
  let totalCartQuantity = 0
  cart.forEach((cartItem)=>{
    totalCartQuantity += cartItem.quantity
  })
   document.querySelector('.js-cart-quantity-container').innerHTML =totalCartQuantity
  
}
 renderCartQuantity()

 export function renderDeliveryOptions() {
    // Fetch the selected ID from localStorage
    const selectedId = JSON.parse(localStorage.getItem('deliveryOption'));
  
    let deliveryOptionsHTML = ``;
  
    // Generate HTML for delivery options
    deliveryOptions.forEach((deliveryOption) => {
      const deliveryOptionId = deliveryOption.id;
  
      deliveryOptionsHTML += `
        <div class="first-delivery-option js-option-selector" data-delivery-option-id="${deliveryOption.id}">
          <span>
            <input class="radio-input" id="delivery-${deliveryOptionId}" type="radio" name="deliveryOption">
          </span>
  
          <span class="delivery-type-span">
            <span class="delivery-time-text">${deliveryOption.name}</span>
            <span class="delivery-charge-span">${deliveryOption.price > 0 ? `R${deliveryOption.price} &#183 shipping` : `No Shipping`}</span>
          </span>
        </div>
      `;
    });
  
    // Inject the generated HTML into the delivery selection container
    document.querySelector('.js-delivery-selection-container').innerHTML = deliveryOptionsHTML;
  
    // Add click event listeners to each delivery option
    document.querySelectorAll('.js-option-selector').forEach((element) => {
      element.addEventListener('click', () => {
        const selectedId = element.dataset.deliveryOptionId;
        // Save the selected ID to localStorage
        localStorage.setItem('deliveryOption', JSON.stringify(selectedId));
        // Re-render the delivery options to sync the checked state
        renderDeliveryOptions();
        renderOrderSummary()
      });
    });
  
    // Find the corresponding radio input and check it
    const input = document.querySelector(`#delivery-${selectedId}`);
    //console.log('Selected ID:', selectedId);
  
    if (input) {
      input.checked = true;
    } else {
      console.error(`No input found for delivery-${selectedId}`);
    }
    return selectedId
  }
  


 


  export function renderOrderSummary() {
    let totalCartQuantity = 0;
    let totalCost = 0;
  
    // Fetch the selected ID from localStorage
    const selectedId = JSON.parse(localStorage.getItem('deliveryOption'));
    const selectedDeliveryOption = getDeliveryOption(parseInt(selectedId, 10)); // Ensure `selectedId` is a number
  
    const deliveryCharge = selectedDeliveryOption ? selectedDeliveryOption.price : 0;
  
   // console.log('Selected Delivery Option:', selectedDeliveryOption);
  
    // Calculate totals for cart items
    cart.forEach((cartItem) => {
      const productId = cartItem.productId;
      const matchingProduct = getProduct(productId);
  
      totalCartQuantity += cartItem.quantity;
      const itemCost = matchingProduct.price * cartItem.quantity;
      totalCost += itemCost;
    });
  
    const totalBeforeTax = totalCost + deliveryCharge;
    const tax = 0.05 * totalBeforeTax;
    const orderTotal = totalBeforeTax + tax;
  
    // Generate the order summary HTML
    let orderSummaryHtml = `
      <span class="order-summary-text">Order Summary</span>
      <div>
        <span>Items (${totalCartQuantity})</span>
        <span>R ${totalCost.toFixed(2)}</span>
      </div>
      <div>
        <span>Delivery Charge:</span>
        <span>R ${deliveryCharge.toFixed(2)}</span>
      </div>
      <div>
        <span>Total Before Tax:</span>
        <span class="total-before-tax">R ${totalBeforeTax.toFixed(2)}</span>
      </div>
      <div>
        <span>Estimated Tax (5%):</span>
        <span>R ${tax.toFixed(2)}</span>
      </div>
      <div class="order-total-container">
        <span>Order Total:</span>
        <span>R ${orderTotal.toFixed(2)}</span>
      </div>
    `;

    
  
    // Update the DOM with the order summary
    document.querySelector('.js-payment-summary').innerHTML = orderSummaryHtml;
  
    // Update the order total and cart item count in other elements
    document.querySelector('.js-subtotal-amount-span').innerHTML = `R ${orderTotal.toFixed(2)}`;
    document.querySelector('.js-cart-item-count').innerHTML = totalCartQuantity;
   
    localStorage.setItem('orderTotal',JSON.stringify(orderTotal))
  
  }

  console.log(localStorage)
  
  
 


  

 
  

 

   


   

   