import Card from 'components/Card/Card';
import IDonut from 'types/IDonut';
import style from '../../Donuts.module.scss';

interface IDonutsContentProps {
	donuts: IDonut[];
}

export default function DonutsSuccessPage(props: IDonutsContentProps) {
	console.log(props.donuts);
	return (
		<div className={style.Donuts}>
			{props.donuts.map((donut, i) => (
				<Card key={i} {...donut} />
			))}
		</div>
	);
}
