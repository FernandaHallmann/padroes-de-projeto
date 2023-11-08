import {BaseBudgetHandler} from "./base-budget-handler";
import {CustomerBudget} from "./customer-budget";

export class CeoBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        budget.approved = true;
        console.log("O CEO trata qualquer orçamento!");
        return budget;
    }
}