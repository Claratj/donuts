import style from './Card.module.scss';

export default function Card() {
	return (
		<div className={style.Card}>
			<img src="https://i.imgur.com/2DhmtJ4.jpg" className={style.Card__image} alt="" data-testid="donut-card" />

			<div className={style.Card__overlay}>
				<div className={style.Card__header}>
					<svg className={style.Card__arc} xmlns="http://www.w3.org/2000/svg">
						<path />
					</svg>
					<div>
						<h3 className={style.Card__title} data-testid="donut-name">
							kim Cattrall
						</h3>
						<span className={style.Card__status}>3 hours ago</span>
					</div>
				</div>
				<p className={style.Card__description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
				</p>
			</div>
		</div>
	);
}
