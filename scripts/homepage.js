 

function toggleContentVisibility(containerSelector, contentHtml, iconSelector, newIconSrc) {
  const containerElement = document.querySelector(containerSelector);
  const iconElement = document.querySelector(iconSelector);
   
  // Update the content
  containerElement.innerHTML = contentHtml;
   //animate the element
   if(containerElement){
   containerElement.classList.add('open-anime')
   }
  // Update the icon
  if (iconElement && newIconSrc) {
      iconElement.src = newIconSrc;
  }
}


let displayingSideBar;

document.querySelector('.menu-icon-container').addEventListener('click', () => {
  const sidebarElement = document.querySelector('.sidebar');
  if(!displayingSideBar){
  sidebarElement.classList.add('b-color');
  sidebarElement.innerHTML = `
      <span class="close-sidebar-span">
          <img class="close-icon" src="images/header-images/exit-icon-red.png">
      </span>

      <div class="shop-section">
          <div class="shop-header">
              <span class="shop-title">SHOP</span>
              <span class="icon-container shop-icon-container">
                  <img class="toggle-icon shop-icon" src="images/header-images/plus-icon.png">
              </span>
          </div>
          <div class="shop-content"></div>
      </div>

      <div class="menu-section"> MENU</div>

      <div class="contact-section">
          <div class="contact-header">
              <span class="contact-title">CONTACT US</span>
              <span class="icon-container contact-icon-container">
                  <img class="toggle-icon contact-icon" src="images/header-images/plus-icon.png">
              </span>
          </div>
          <div class="contact-content"></div>
      </div>

      <div class="auth-section">
          <div class="auth-header">
              <span class="auth-title">Sign-Up/Log In</span>
              <span class="icon-container auth-icon-container">
                  <img class="toggle-icon auth-icon" src="images/header-images/plus-icon.png">
              </span>
          </div>
          <div class="auth-content"></div>
      </div>

      <div class="social-media-section">
          <span class="social-media-title">FOLLOW US</span>
          <div class="social-media-icons">
              <span class="media-icon">
                  <img class="icon" src="images/header-images/facebook-icon.png">
              </span>
              <span class="media-icon">
                  <img class="icon" src="images/header-images/icon-twitter.png">
              </span>
              <span class="media-icon">
                  <img class="icon" src="images/header-images/icon-instagram.png">
              </span>
          </div>
      </div>
  `;

  document.querySelector('.shop-header').addEventListener('click', () => {
      toggleContentVisibility(
          '.shop-content',
          contentHtml.shopCategories,
          '.shop-icon',
          'images/header-images/exit-icon.png')
  });

  document.querySelector('.contact-header').addEventListener('click', () => {
      toggleContentVisibility(
          '.contact-content',
          contentHtml.contactMethods,
          '.contact-icon',
          'images/header-images/exit-icon.png' 
      );
  });

  document.querySelector('.auth-header').addEventListener('click', () => {
      toggleContentVisibility(
          '.auth-content',
          contentHtml.authOptions,
          '.auth-icon',
          'images/header-images/exit-icon.png'  )
  });
  displayingSideBar = true
}
else{
  sidebarElement.classList.remove('b-color')
  sidebarElement.innerHTML=''
 displayingSideBar= false

}
});

let contentHtml = {
  shopCategories: `
      <span>All Products</span>
      <span>Burgers</span>
      <span>Sausage Rolls</span>
      <span>Coffee</span>
      <span>Cold Drinks</span>
  `,
  contactMethods: `
      <span>Whatsapp</span>
      <span>Messenger</span>
      <span>Email</span>
      <span>Phonecall</span>
  `,
  authOptions: `
      <span>Sign-up</span>
      <span>Log In</span>
  `
};




 






/*
Notes



f (state[selector])
is used to check the value of a specific property in an object named state. Here’s a breakdown of what’s happening:

Context
In the context of the code provided earlier, state is an object that tracks whether specific elements are currently visible or not, or whether specific icons are in a particular state.

Breakdown
state: This is an object that holds the current state of various elements. For example, it might look like this:

javascript
Copy code
const state = {
  '.search-input-container-primary': false,
  '.sidebar': false,
  // Other elements
};
Here, state keeps track of whether the elements represented by the selectors (like '.search-input-container-primary' and '.sidebar') are currently visible (true) or hidden (false).

selector: This is a string representing the CSS selector of the element you're interested in. For example, '.search-input-container-primary'.

state[selector]: This accesses the property of the state object whose key is the value of selector. In other words, it retrieves the current value (either true or false) associated with that specific CSS selector.

if (state[selector]): This condition checks whether the value of state[selector] is truthy. If state[selector] is true (or any other truthy value), the condition evaluates to true, and the code block inside the if statement will execute.

Example
Let’s say you have the following state object and selector:

javascript
Copy code
const state = {
  '.search-input-container-primary': true,
  '.sidebar': false
};

const selector = '.search-input-container-primary';
In this case, state[selector] would evaluate to true because selector is '.search-input-container-primary' and state['.search-input-container-primary'] is true.

So, if (state[selector]) would be equivalent to if (true), and the code inside the if block would execute.

Usage
The condition if (state[selector]) is used to check whether a specific element (identified by selector) is in a particular state. In your case, it determines whether an element is currently displayed or hidden based on its state, allowing you to add or remove classes or update icons accordingly.
*/
