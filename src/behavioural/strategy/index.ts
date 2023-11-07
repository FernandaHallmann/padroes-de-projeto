import {ECommerceShoppingCart} from "./shopping-cart/e-commerce-shopping-cart";
import {NewDiscount} from "./shopping-cart/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Camiseta', price: 49.9 });
shoppingCart.addProduct({ name: 'Caderno', price: 59.9 });
shoppingCart.addProduct({ name: 'Mochila', price: 79.59 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());