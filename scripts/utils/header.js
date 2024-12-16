
export function headerDisplay(){
    let displayingSideBar;
    let displayingCategories;
    let displayingSearchbar;
    
    function sideBarDisplay(displayingSideBar){
      document.querySelector('.menu-icon-container').addEventListener('click',()=>{
        const sideBar = document.querySelector('.sidebar')
        if(!displayingSideBar){
        sideBar.classList.add('show')
        document.querySelector('.menu-icon-container').innerHTML=`
         <img class="menu-icon" src="images/header-images/exit-icon-red.png">
        `
        displayingSideBar = true
      }else{
        sideBar.classList.add('animate')
        setTimeout(()=>{
          sideBar.classList.remove('animate')
          sideBar.classList.remove('show')
         
        },300)
        
        
        document.querySelector('.menu-icon-container').innerHTML=`
        <img class="menu-icon" src="images/header-images/menu-icon.png">
       `
        displayingSideBar = false
      
      }
      })
    
    }
    
    function categoriesDisplay(displayingCategories){
      document.querySelector('.shop-span-primary').addEventListener('click',()=>{
        const categories = document.querySelector('.shop-categories-container')
        if(!displayingCategories){
        categories.classList.add('open')
        //document.querySelector('.menu-icon-container').innerHTML=`
        // <img class="menu-icon" src="images/header-images/exit-icon-red.png">
       // `
        displayingCategories = true
      }else{
        categories.classList.add('close')
        setTimeout(()=>{
          categories.classList.remove('open')
          categories.classList.remove('close')
         
        },300)
        
       // document.querySelector('.menu-icon-container').innerHTML=`
       // <img class="menu-icon" src="images/header-images/menu-icon.png">
      //`
        displayingCategories = false
      }
      })
    
    }
    
    function searchBarDisplay(){
      document.querySelector('.search-icon-container').addEventListener('click',()=>{
        const searchbar = document.querySelector('.search-input-container-primary')
        if(!displayingSearchbar){
          searchbar.classList.add('open')
          document.querySelector('.search-icon-container').innerHTML=`
           <img class="menu-icon" src="images/header-images/exit-icon-red.png">
         `
          displayingSearchbar = true
        }else{
          searchbar.classList.add('close')
          setTimeout(()=>{
            searchbar.classList.remove('open')
            searchbar.classList.remove('close')
           
          },300)
          
         document.querySelector('.search-icon-container').innerHTML=`
         <img class="menu-icon" src="images/header-images/search-icon-white.png">
        `
          displayingSearchbar = false
        }
      })
    }
    
    sideBarDisplay(displayingSideBar)
    
    searchBarDisplay()
    categoriesDisplay(displayingCategories)
    }
    