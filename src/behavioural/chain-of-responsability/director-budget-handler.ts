import {BaseBudgetHandler} from "./base-budget-handler";
import {CustomerBudget} from "./customer-budget";

export class DirectorBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 50000) {
            budget.approved = true;
            console.log("O diretor tratou o orçamento!");
            return budget;
        }

        return super.handle(budget);
    }
}