import {CustomerDataParser} from "./customer-data-parser";
import {CustomerData} from "./customer-data";
import {promises} from "fs";

export class CustomerDataParserJson extends CustomerDataParser {
    protected async parseDate(): Promise<CustomerData[]> {
        const rawData = await promises.readFile(this.filePath);

        const data = JSON.parse(rawData.toString());

        const customerData: CustomerData[] = [];

        for (const customer of data) {
            const [name, age, cpf] = customer;
            customerData.push({name, age: Number(age), cpf});
        }

        return customerData;
    }
}