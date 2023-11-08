import {CustomerDataParser} from "./customer-data-parser";
import {CustomerData} from "./customer-data";
import {promises} from "fs";

export class CustomerDataParserTxt extends CustomerDataParser {
    protected async parseDate(): Promise<CustomerData[]> {
        const rawData = await promises.readFile(this.filePath);

        const data = rawData.toString();
        const lines = data.split('\n');

        const customerData: CustomerData[] = [];

        for (const line of lines) {
            const [name, age, cpf] = line.split('\t');
            customerData.push({name, age: Number(age), cpf});
        }

        return customerData;
    }
}