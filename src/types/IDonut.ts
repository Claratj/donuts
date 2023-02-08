import EAllergen from './IAllergen';

export default interface IDonut {
	id: string;
	name: string;
	inStock: boolean;
	description: string;
	allergens: EAllergen[];
}
