import {renderCartItemsHTML,renderOrderSummary,renderDeliveryOptions} from "./cart.js";
import { headerDisplay } from "./utils/header.js"; headerDisplay()
import { cart} from "./cart.js";

if(cart.length > 0){
renderCartItemsHTML()
}

renderOrderSummary()
renderDeliveryOptions()
 