

function toggleVisibility(selector,action,state){
 const element = document.querySelector(selector)
 if (state[selector]){
  element.classList.remove(action)
  state[selector] = false;
 }else{
  element.classList.add(action)
  state[selector]= true;
 
 
 }

}

function updateIcon(selector,imageUrl,state){

 const element = document.querySelector(selector)
 if(state[selector]){
 element.innerHTML =`<img class ="add-icon" src = "images/header-images/plus-icon.png">`;
 state[selector]= false
 console.log(element)
}else{
  element.innerHTML = `<img class ="add-icon" src = "${imageUrl}">`
 state[selector]= true;
}
}

const visibilityState = {
  '.shop-icon-span': false,
  '.contact-icon-span': false,
  '.sign-in-icon-span': false,
  '.contact-us-platforms':false
}


const iconState = {
  '.shop-icon-span': false,
  '.contact-icon-span': false,
  '.sign-in-icon-span': false
};

// Event listeners
document.querySelector('.search-icon-container').addEventListener('click', () => {
  toggleVisibility('.search-input-container-primary', 'show', visibilityState);
});

document.querySelector('.menu-icon-container').addEventListener('click', () => {
  toggleVisibility('.sidebar', 'show', visibilityState);
});

document.querySelector('.close-sidebar-span').addEventListener('click', () => {
  toggleVisibility('.sidebar', 'show', visibilityState);
});

document.querySelector('.shop-container').addEventListener('click', () => {
  toggleVisibility('.shop-categories-container', 'show', visibilityState);
  updateIcon('.shop-icon-span', 'images/header-images/exit-icon.png', iconState);
 
});

document.querySelector('.contact-container').addEventListener('click', () => {
  toggleVisibility('.contact-methods-container', 'show', visibilityState);
  updateIcon('.contact-icon-span', 'images/header-images/exit-icon.png', iconState);
});

document.querySelector('.login-register-container').addEventListener('click', () => {
  toggleVisibility('.sign-in-categories-container', 'show', visibilityState);
  updateIcon('.sign-in-icon-span', 'images/header-images/exit-icon.png', iconState);
});

document.querySelector('.contact-us-span').addEventListener('click', () => {
  toggleVisibility('.contact-us-platforms', 'show', visibilityState);
});








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
