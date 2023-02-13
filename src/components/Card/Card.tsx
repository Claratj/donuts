import IDonut from 'types/IDonut';
import style from './Card.module.scss';

export default function Card(props: IDonut) {
	return (
		<div className={style.Card} key="">
			<img src={props.imageUrl} className={style.Card__image} alt="" data-testid="donut-card" />

			<div className={style.Card__overlay}>
				<div className={style.Card__header}>
					<svg className={style.Card__arc} xmlns="http://www.w3.org/2000/svg">
						<path />
					</svg>
					<div>
						<h3 className={style.Card__title} data-testid="donut-name">
							{props.name}
						</h3>
						<span className={style.Card__status}>{props.inStock}</span>
					</div>
				</div>
				<p className={style.Card__description}>{props.description}</p>
			</div>
		</div>
	);
}
