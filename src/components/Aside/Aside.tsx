import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { DONUTS_ROUTE, DONUT_ROUTE } from 'routes/routes';
import style from './Aside.module.scss';
import donutIllustration from './images/donut_illustration.svg';
import donutLogo from './images/donut_logo.svg';

export default function Aside() {
	return (
		<aside className={style.Aside}>
			<div className={style.Aside__header}>
				<img className={style.Aside__header__img} src={donutLogo} alt="Donut illustration" />
			</div>
			<div className={style.Aside__body}>
				<nav className={style.Nav}>
					<NavLink
						className={({ isActive }) =>
							isActive ? classNames(style.Nav__link, style['Nav__link--active']) : style.Nav__link
						}
						to={DONUTS_ROUTE}
					>
						<span className={classNames('material-icons-outlined md-16', style.Nav__icon)}>bakery_dining</span>
						Donuts
					</NavLink>
					<NavLink className={style.Nav__link} to={DONUT_ROUTE}>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>face</span>
						Donut
					</NavLink>
					<NavLink className={style.Nav__link} to={DONUT_ROUTE}>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>face</span>
						Donut
					</NavLink>
					<NavLink className={style.Nav__link} to={DONUT_ROUTE}>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>face</span>
						Donut
					</NavLink>
					<NavLink className={style.Nav__link} to={DONUT_ROUTE}>
						<span className={classNames('material-icons md-16', style.Nav__icon)}>face</span>
						Donut
					</NavLink>
				</nav>
			</div>
			<div className={style.Aside__footer}>
				{/* <img src={donut} alt="Donut illustration" /> */}
				<img className={style.Aside__footer__img} src={donutIllustration} alt="Donut illustration" />
			</div>
		</aside>
	);
}
