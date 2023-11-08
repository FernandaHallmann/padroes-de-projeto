import {Mediator} from "./mediator";
import {Seller} from "./seller";
import {Buyer} from "./buyer";

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({id: '1', name: 'Camiseta', price: 49.90});
seller1.addProduct({id: '2', name: 'Caneca', price: 9.90});
const seller2 = new Seller();
seller2.addProduct({id: '3', name: 'Caneta', price: 1.90});
seller2.addProduct({id: '4', name: 'Lápis', price: 0.90});

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('4');
buyer.viewProducts();