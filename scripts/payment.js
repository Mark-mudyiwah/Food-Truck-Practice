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


function validateEmail(){
  const emailInput = document.querySelector('.js-email-input');
  const email = emailInput.value.trim();

  // Regular expression to check if the email ends with @gmail.com
  const validEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  if (!validEmail) {
    document.querySelector('.js-email-caution-span').innerHTML = `
      Please provide a valid Gmail address &#9888
    `;
     emailInput.style.borderColor = "red"
    emailInput.focus(); // Highlight input for better user experience
  } else if(validEmail){
    document.querySelector('.js-email-caution-span').innerHTML = ''; // Clear the caution span
    console.log("Email submitted successfully:", email);
    emailInput.style.borderColor = "green"
  }
  };

  document.querySelector('.js-email-input').addEventListener('input',(event)=>{
    validateEmail()
  })


  function validateName(elementClass, errorSpan) {
    // Get the input element using the provided class name
    const inputElement = document.querySelector(`.${elementClass}`);
    const inputValue = inputElement.value.trim();  // Get the value from the input element
    
    // Regular expression to ensure no numbers (digits) or symbols in the input
    const hasNoNumbers = /^[a-zA-Z]+$/.test(inputValue);  // Only letters allowed
    const validLength = inputValue.length > 3 && inputValue.length < 14;
  
    
    if (!validLength) {
      document.querySelector(`.${errorSpan}`).innerHTML = `Must be 4 to 14 characters &#9888;`;
      inputElement.focus();
      inputElement.style.borderColor = "red";
    } 
    
    else if (validLength && !hasNoNumbers) {
      document.querySelector(`.${errorSpan}`).innerHTML = `Musn't include numbers or symbols &#9888;`;
      inputElement.style.borderColor = "red";
    } 
    // If everything is valid
    else if (hasNoNumbers && validLength) {
      document.querySelector(`.${errorSpan}`).innerHTML = ''; // Clear the error message
      inputElement.style.borderColor = "green";  // Mark the input as valid
    }
  }


  function validateAddress(elementClass, errorSpan) {
   
    const inputElement = document.querySelector(`.${elementClass}`);
    const inputValue = inputElement.value.trim();   
  
    // Regular expression for a valid address pattern (alphanumeric, spaces, commas, periods, and hyphens)
    const isValidAddress = /^[a-zA-Z0-9\s,.-]+$/.test(inputValue);  // Valid address characters
    const validLength = inputValue.length > 8;  // You can adjust this based on your requirements (minimum length)
  
    // Check if the length and the address structure are valid
    if (!validLength) {
      document.querySelector(`.${errorSpan}`).innerHTML = `Address is too short &#9888;`;
      inputElement.focus();
      inputElement.style.borderColor = "red";
    } 
    // Check if address contains invalid characters
    else if (validLength && !isValidAddress) {
      document.querySelector(`.${errorSpan}`).innerHTML = `Provide a valid address (no special symbols) &#9888;`;
      inputElement.style.borderColor = "red";
    } 
    // If everything is valid
    else if (isValidAddress && validLength) {
      document.querySelector(`.${errorSpan}`).innerHTML = ''; // Clear the error message
      inputElement.style.borderColor = "green";   
  }
}



function validateNumber(elementClass, errorSpan, length) {
  // Get the input element using the provided class name
  const inputElement = document.querySelector(`.${elementClass}`);
  const inputValue = inputElement.value;  // Get the value from the input element
  
  // Regular expression to check if the input contains any non-digit characters
  const hasSymbols = /[^0-9]/.test(inputValue);  // Checks if there are any non-digit characters
  const validLength = inputValue.length === length; 
  
 
  if (!validLength) {
    document.querySelector(`.${errorSpan}`).innerHTML = `Must be ${length} characters long &#9888;`;
    inputElement.focus();
    inputElement.style.borderColor = "red";
  } 
  // Check if the input contains symbols (non-digit characters)
  else if (hasSymbols) {
    document.querySelector(`.${errorSpan}`).innerHTML = `Cannot include symbols &#9888;`;
    inputElement.style.borderColor = "red";
  } 
  // If everything is valid
  else {
    document.querySelector(`.${errorSpan}`).innerHTML = '';   
    inputElement.style.borderColor = "green";  
  }
}





 
  document.querySelector('.js-address-input').addEventListener('input', () => {
    validateAddress('js-address-input', 'js-address-caution-span');
  });
 
  document.querySelector('.js-name-input').addEventListener('input', () => {
    validateName('js-name-input', 'js-name-caution-span');
  });

  document.querySelector('.js-last-name-input').addEventListener('input', () => {
    validateName('js-last-name-input', 'js-last-name-caution-span');
  });

  document.querySelector('.js-city-input').addEventListener('input', () => {
    validateName('js-city-input', 'js-city-caution-span');
  });
 
  document.querySelector('.js-postal-code-input').addEventListener('input', () => {
    validateNumber('js-postal-code-input', 'js-postal-code-caution-span',4);
  });

  
  document.querySelector('.js-cell-number-input').addEventListener('input', () => {
    validateNumber('js-cell-number-input', 'js-cell-number-caution-span',10);
  });
 
 
