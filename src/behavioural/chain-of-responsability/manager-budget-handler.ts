import {BaseBudgetHandler} from "./base-budget-handler";
import {CustomerBudget} from "./customer-budget";

export class ManagerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 5000) {
            budget.approved = true;
            console.log("O gerente tratou o orçamento!");
            return budget;
        }

        return super.handle(budget);
    }
}