import {CustomerBudget} from "./customer-budget";
import {SellerBudgetHandler} from "./seller-budget-handler";
import {ManagerBudgetHandler} from "./manager-budget-handler";
import {DirectorBudgetHandler} from "./director-budget-handler";
import {CeoBudgetHandler} from "./ceo-budget-handler";

const customerBudget = new CustomerBudget(2000);

const seller = new SellerBudgetHandler();
seller.setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CeoBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);