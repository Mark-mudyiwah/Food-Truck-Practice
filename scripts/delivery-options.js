
const deliveryOptions = [
    {
        id:1,
        price:0
    },
    {
        id:2,
        price:50

    },
    {
        id:3,
        price:30

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