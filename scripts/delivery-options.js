
 export const deliveryOptions = [
    {
        id:1,
        price:0,
        name:`24hr pickup from store`
    },
    {
        id:2,
        price:70,
        name:` 24hr delivery`

    },
    {
        id:3,
        price:50,
        name:`Within 48 hrs`

    }
]

export function getDeliveryOption(deliveryOptionId) {
    let matchingDeliveryOption = null;
  
    deliveryOptions.forEach((deliveryOption) => {
      if (deliveryOption.id === deliveryOptionId) {
        matchingDeliveryOption = deliveryOption;
      }
    });
  
    return matchingDeliveryOption;
  }
  