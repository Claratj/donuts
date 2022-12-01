import IAllergens from "./IAllergens";


export default interface IDonut {
	id: string;
	name: string;
	inStock: boolean;
	description: string;
	allergens: Array<IAllergens>;
}
