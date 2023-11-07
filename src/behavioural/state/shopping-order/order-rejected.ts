import {ShoppingOrderState} from "./shopping-order-state";
import {ShoppingOrder} from "./shopping-order";
import {OrderPending} from "./order-pending";
import {OrderApproved} from "./order-approved";

export class OrderRejected implements ShoppingOrderState {
    private name = 'OrderPending';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log('Não possso aprovar o pagamento de um pedido recusado');
    }

    rejectPayment(): void {
        console.log('O pedido já está no estado pagamento recusado');
    }

    waitPayment(): void {
        console.log('Não possso aprovar o pagamento de um pedido recusado');
    }

    shipOrder(): void {
        console.log('Não posso enviar o pedido com pagamento recusado');
    }
}