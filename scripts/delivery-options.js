
 export const deliveryOptions = [
    {
        id:1,
        price:0,
        name:`24hr pickup from store`
    },
    {
        id:2,
        price:50,
        name:`Within 2 days`

    },
    {
        id:3,
        price:30,
        name:`3 day delivery`

    }
]

export function getDeliveryOption(deliveryOptionId){
 let matchingDeliveryOption;

 deliveryOptions.forEach((deliveryOption)=>{
 const deliveryOptionId = deliveryOption.id
 if(deliveryOptionId === deliveryOptionId){

    matchingDeliveryOption = deliveryOption
 }
})
 return matchingDeliveryOption
}