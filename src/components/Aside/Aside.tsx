import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { DONUTS_ROUTE, ICECREAMS_ROUTE, MUFFINS_ROUTE } from 'routes/routes';
import style from './Aside.module.scss';
import donutIllustration from './images/donut_illustration.svg';
import donutLogo from './images/donut_logo.svg';

export default function Aside() {
	return (
		<aside className={style.Aside}>
			<div className={style.Aside__header}>
				<img className={style.Aside__header__img} src={donutLogo} alt="Donut illustration" />
				<h2 className={style.Aside__header__brand}>SpookyBun</h2>
			</div>
			<div className={style.Aside__body}>
				<nav className={style.Nav}>
					<NavLink
						className={({ isActive }) =>
							isActive ? classNames(style.Nav__link, style['Nav__link--active']) : style.Nav__link
						}
						to={DONUTS_ROUTE}
					>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>bakery_dining</span>
						Donuts
					</NavLink>
					<NavLink className={style.Nav__link} to={MUFFINS_ROUTE}>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>face</span>
						Muffins
					</NavLink>
					<NavLink className={style.Nav__link} to={ICECREAMS_ROUTE}>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>face</span>
						Popsicles
					</NavLink>
				</nav>
			</div>
			<div className={style.Aside__footer}>
				<img className={style.Aside__footer__img} src={donutIllustration} alt="Donut illustration" />
			</div>
		</aside>
	);
}
