import { useNavigate } from 'react-router-dom';
import { DONUTS_ROUTE } from 'routes/routes';
import IDonut from 'types/IDonut';

interface IUseDonutsSuccessPageArgs {
	donuts: IDonut[];
}

export default function useDonutsSuccessPage(args: IUseDonutsSuccessPageArgs) {
	const navigate = useNavigate();

	function onCardClick(donut: IDonut) {
		navigate(`${DONUTS_ROUTE}/${donut.id}`);
	}

	return {
		onCardClick,
	};
}
