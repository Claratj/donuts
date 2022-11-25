import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { DONUTS_ROUTE, DONUT_ROUTE } from 'routes/routes';
import style from './Aside.module.scss';

export default function Aside() {
	return (
		<aside className={style.Aside}>
			<div className={style.Aside__header}>Header</div>
			<div className={style.Aside__body}>
				<nav className={style.Nav}>
					<NavLink
						className={({ isActive }) =>
							isActive ? classNames(style.Nav__link, style['Nav__link--active']) : style.Nav__link
						}
						to={DONUTS_ROUTE}
					>
						Donuts
					</NavLink>
					<NavLink className={style.Nav__link} to={DONUT_ROUTE}>
						Donut
					</NavLink>
				</nav>
			</div>
			<div className={style.Aside__footer}>Footer</div>
		</aside>
	);
}
