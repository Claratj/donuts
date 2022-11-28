import Aside from 'components/Aside/Aside';
import Card from 'components/Card/Card';
import style from './Overview.module.scss';

export default function OverviewPage() {
	return (
		<div className={style.Overview}>
			<Aside />
			<main>
				Overview Page
				<Card />
			</main>
		</div>
	);
}
