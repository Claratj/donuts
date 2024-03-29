import { useNavigate } from 'react-router-dom';
import IDonut from 'types/IDonut';
import style from './Card.module.scss';
import Allergen from './components/Allergen';

export default function Card(props: IDonut) {
	const navigate = useNavigate();

	function handleOnCardClick() {
		navigate(`overview/donuts/${props.id}`);
	}

	return (
		<div className={style.Card} key="" onClick={handleOnCardClick}>
			<img src={props.imageUrl} className={style.Card__image} alt="" data-testid="donut-card" />

			<div className={style.Card__overlay}>
				<div className={style.Card__header}>
					<svg className={style.Card__arc} xmlns="http://www.w3.org/2000/svg">
						<path />
					</svg>
					<div className={style.Card__name}>
						<h3 className={style.Card__title} data-testid="donut-name">
							{props.name}
						</h3>

						{props.inStock ? (
							<span className={style.Card__status}> in stock</span>
						) : (
							<span className={style.Card__status}>out of stock</span>
						)}
					</div>
				</div>
				<div className={style.Card__info}>
					<div>{props.allergens ? props.allergens.map((allergen, i) => <Allergen allergen={allergen} />) : ' '}</div>
					<p className={style.Card__description}>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
