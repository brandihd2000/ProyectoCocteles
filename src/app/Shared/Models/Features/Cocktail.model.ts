import BaseEntity from "../Base/base.model";
import Drink from "./Drinks.model";

export default class Cocktail extends BaseEntity {
    constructor(public drinks: Array<Drink>) {
        super();
    }
}