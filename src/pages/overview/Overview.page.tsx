import Aside from 'components/Aside/Aside';
import DonutsPage from 'pages/donuts/Donuts.page';
import style from './Overview.module.scss';

export default function OverviewPage() {
	return (
		<div className={style.Overview}>
			<Aside />
			<main className={style.Overview__main}>
				Overview Page
				<DonutsPage />
			</main>
		</div>
	);
}
