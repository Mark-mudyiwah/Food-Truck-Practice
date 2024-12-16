   import { cart } from "./cart.js";
   import { getProduct } from "./products.js"; 
 
 
 
   const orderTotal = JSON.parse(localStorage.getItem('orderTotal'))


/*cart.reduce((total, item) => {
  const matchingItem = getProduct(item.productId);
  return total + matchingItem.price * item.quantity;
}, 0);*/

function renderCheckoutSummary() {
  let html = "";
  cart.forEach((item) => {
    const matchingItem = getProduct(item.productId);

    html += `
      <div class="item-summary">
        <span class="s-item-image">
          <span class="s-item-quantity">
            ${item.quantity}
          </span>
          <img class="item-img" src="${matchingItem.image}" >
        </span>
        <span class="s-item-name">
          ${matchingItem.name}
        </span>
        <span class="s-item-price">
          R${(matchingItem.price * item.quantity).toFixed(2)}
        </span>
      </div>
    `;
  });

  document.querySelector('.js-summary-container').innerHTML = html;
  document.querySelector('.js-order-total-span').innerHTML = `R ${orderTotal.toFixed(2)}`;

return html
}

renderCheckoutSummary();

function submitPayment(dynamicOrderTotal,summary) {
  const form = document.createElement("form");
  form.action = "https://sandbox.payfast.co.za/eng/process";
  form.method = "POST";

  const fields = {
    merchant_id: "10036325",  
    merchant_key: "7964rxbhvgz9b",  
    amount: dynamicOrderTotal.toFixed(2),  
    item_name: "Summary",  
    return_url: "https://your-website.com/success",
    cancel_url: "https://your-website.com/cancel",
    notify_url: "https://your-website.com/notify",
  };

  for (const key in fields) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = fields[key];
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}

// Add event listener to the submit button
document.querySelector('.js-submit').addEventListener('click', () => {
  submitPayment(orderTotal);

});

document.querySelector('.js-place-order').addEventListener('click',()=>{
 
  const emailInput = document.querySelector('.js-email-input')

  const email = emailInput.value
  
  const validEmail = email.includes('@gmail.com')
  if(!validEmail){
    document.querySelector('.js-email-caution-span').innerHTML = `
    Please provide a valid Email!
    `
    emailInput.value = ''
  }
  

  const nameInput = document.querySelector('.js-name-input')

  const name = nameInput.value

 
  console.log(name)
 

})
