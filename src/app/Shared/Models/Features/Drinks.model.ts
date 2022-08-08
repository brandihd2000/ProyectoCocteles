import BaseEntity from "../Base/base.model";

export default class Drink extends BaseEntity {
    constructor(
        public dateModified?: string,
        public idDrink?: string,
        public strAlcoholic?: string,
        public strCategory?: string,
        public strCreativeCommonsConfirmed?: string,
        public strDrink?: string,
        public strDrinkAlternate?: string,
        public strDrinkThumb?: string,
        public strGlass?: string,
        public strIBA?: string,
        public strImageAttribution?: string,
        public strImageSource?: string,
        public strIngredient1?: string,
        public strIngredient2?: string,
        public strIngredient3?: string,
        public strIngredient4?: string,
        public strIngredient5?: string,
        public strIngredient6?: string,
        public strIngredient7?: string,
        public strIngredient8?: string,
        public strIngredient9?: string,
        public strIngredient10?: string,
        public strIngredient11?: string,
        public strIngredient12?: string,
        public strIngredient13?: string,
        public strIngredient14?: string,
        public strIngredient15?: string,
        public strInstructions?: string,
        public strInstructionsDE?: string,
        public strInstructionsES?: string,
        public strInstructionsFR?: string,
        public strInstructionsIT?: string,
        public strMeasure1?: string,
        public strMeasure2?: string,
        public strMeasure3?: string,
        public strMeasure4?: string,
        public strMeasure5?: string,
        public strMeasure6?: string,
        public strMeasure7?: string,
        public strMeasure8?: string,
        public strMeasure9?: string,
        public strMeasure10?: string,
        public strMeasure11?: string,
        public strMeasure12?: string,
        public strMeasure13?: string,
        public strMeasure14?: string,
        public strMeasure15?: string,
        public strTags?: string,
        public strVideo?: string,

        ) {
        super();
    }
}