import {BaseBudgetHandler} from "./base-budget-handler";
import {CustomerBudget} from "./customer-budget";

export class SellerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 1000) {
            budget.approved = true;
            console.log("O vendedor tratou o orçamento!");
            return budget;
        }

        return super.handle(budget);
    }
}