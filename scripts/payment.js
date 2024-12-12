 
 const orderTotal = JSON.parse(localStorage.getItem('orderTotal'))
   console.log(orderTotal)

function submitPayment() {
    const form = document.createElement("form");
    form.action = "https://sandbox.payfast.co.za/eng/process";
    form.method = "POST";

    const fields = {
      merchant_id: " 10036325", // Replace with your Sandbox Merchant ID
      merchant_key: "7964rxbhvgz9b ", // Replace with your Sandbox Merchant Key
      amount: "101.82", // Dynamic amount
      item_name: "Dynamic Item", // Dynamic item name
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

  document.querySelector('.js-submit').addEventListener('click',()=>{
    submitPayment()
  })

 