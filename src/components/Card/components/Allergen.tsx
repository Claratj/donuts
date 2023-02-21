import IAllergen from 'types/IAllergen';

interface IAllergenProps {
	allergen: IAllergen;
}

export default function Allergen(props: IAllergenProps): JSX.Element {
	switch (props.allergen) {
		case 'milk':
			return <span>Milk</span>;
		case 'egg':
			return <span>Egg</span>;
		case 'soy':
			return <span>Soy</span>;
		case 'wheat':
			return <span>Wheat</span>;
		case 'nuts':
			return <span>nuts</span>;
		default:
			return <></>;
	}
}
