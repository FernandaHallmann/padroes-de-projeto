import {Customer} from "../customer/customer";
import {VehicleProtocol} from "../vehicle/vehicle-protocol";
import {IndividualCustomer} from "../customer/individual-customer";
import {IndividualVehicle} from "../vehicle/individual-vehicle";

export class IndividualCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): VehicleProtocol{
        const customer = this.createCustomer(customerName);
        return new IndividualVehicle(vehicleName, customer);
    }
}