let visibilityStates = {
    shop: false,
    contact: false,
    auth: false
  };
  
  function toggleContentVisibility(containerSelector, contentHtml, iconSelector, newIconSrc, section) {
    const containerElement = document.querySelector(containerSelector);
    const iconElement = document.querySelector(iconSelector);
     
    // Toggle the content visibility
    if(!visibilityStates[section]){
      containerElement.innerHTML = contentHtml;
      visibilityStates[section] = true;
    } else {
      containerElement.innerHTML = ``;
      visibilityStates[section] = false;
    }
  
    // Toggle the icon based on content visibility
    if (visibilityStates[section]) {
        iconElement.src = newIconSrc;
    } else {
        iconElement.src = `images/header-images/plus-icon.png`;
    }
  }
  
  let displayingSideBar = false;
  
  document.querySelector('.menu-icon-container').addEventListener('click', () => {
    const sidebarElement = document.querySelector('.sidebar');
    
    if (!displayingSideBar) {
      sidebarElement.classList.add('b-color');
      sidebarElement.classList.add('change-width')
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
  
      // Add event listeners for each section's header
      document.querySelector('.shop-header').addEventListener('click', () => {
        toggleContentVisibility(
          '.shop-content',
          contentHtml.shopCategories,
          '.shop-icon',
          'images/header-images/exit-icon.png',
          'shop'
        );
      });
  
      document.querySelector('.contact-header').addEventListener('click', () => {
        toggleContentVisibility(
          '.contact-content',
          contentHtml.contactMethods,
          '.contact-icon',
          'images/header-images/exit-icon.png',
          'contact'
        );
      });
  
      document.querySelector('.auth-header').addEventListener('click', () => {
        toggleContentVisibility(
          '.auth-content',
          contentHtml.authOptions,
          '.auth-icon',
          'images/header-images/exit-icon.png',
          'auth'
        );
      });
  
      displayingSideBar = true;
    } else {
      sidebarElement.classList.remove('b-color');
      sidebarElement.classList.remove('change-width')
      sidebarElement.innerHTML = '';
      displayingSideBar = false;
      
      // Reset visibility states
      visibilityStates.shop = false;
      visibilityStates.contact = false;
      visibilityStates.auth = false;
    }
  
    document.querySelector('.close-sidebar-span').addEventListener('click', () => {
      sidebarElement.innerHTML = '';
      sidebarElement.classList.remove('b-color');
      sidebarElement.classList.remove('change-width');
      displayingSideBar = false;
      
      // Reset visibility states
      visibilityStates.shop = false;
      visibilityStates.contact = false;
      visibilityStates.auth = false;
    });
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

  let displayingContactPlatforms;
  
  document.querySelector('.contact-us-span').addEventListener('click',()=>{
  
    const platformsElement = document.querySelector('.contact-us-platforms')
 if(!displayingContactPlatforms){
    platformsElement.innerHTML= ` <div>
                    <span>
                        <img class="whatsapp-icon" src="images/header-images/whatsapp-icon.png">
                    </span>
                    <span> 
                    Whatsapp
                    </span>
                </div>
                <div>
                    <span>
                      <img class="email-icon" src="images/header-images/gmail-icon.png">
                    </span>
                    <span> 
                    Email
                    </span>
                </div>
                <div>
                    <span>
                     <img class="whatsapp-icon" src="images/header-images/messenger-icon.png">
                    </span>
                    <span> 
                    Messenger
                    </span>
                </div>
`
displayingContactPlatforms = true
 }else
 {
    platformsElement.innerHTML = ``
    displayingContactPlatforms = false
 }
})

let displayingSearchbar;

document.querySelector('.search-icon-container').addEventListener('click',()=>{
   const searchbar = document.querySelector('.search-input-container-primary')
if(!displayingSearchbar){
   searchbar.classList.add('search-color')
searchbar.innerHTML = `
<div class="search-input-container">
    <input class="search-input" placeholder="Search Products">
</div>
`
displayingSearchbar = true
}
else{
    searchbar.classList.remove('search-color')
    searchbar.innerHTML =``
    displayingSearchbar = false
}
})