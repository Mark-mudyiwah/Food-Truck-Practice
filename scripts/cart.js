import { headerDisplay } from "./homepage.js";


headerDisplay()

const cart = [
    
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
   console.log(localStorage)
   }

   