import {TaxVisitorProtocol} from "./tax-visitor-protocol";
import {AlcoholicDrink} from "./alcoholic-drink";
import {Cigarette} from "./cigarette";
import {Food} from "./food";

export class UsTaxVisitor implements TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number {
        return food.getPrice() * 1.15;
    }

    calculateTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.getPrice() * 3;
    }
    calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
        return alcoholicDrink.getPrice() * 2;
    }
}