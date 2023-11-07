import {DeliveryFactory} from "./delivery/delivery-factory";
import {deliveryContext} from "./delivery/delivery-context";

const factory = new DeliveryFactory();
deliveryContext(factory, 'João', '123', 'Rua 1', 'Cidade 1');
deliveryContext(factory, 'Carlos', '123', 'Rua 1', 'Cidade 1');
deliveryContext(factory, 'Mariana', '56', 'Rua 1', 'Cidade 1');
deliveryContext(factory, 'Helena', '3', 'Rua 2', 'Cidade 2');

console.log();
console.log(factory.getLocations());