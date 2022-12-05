
import { useListDonutsQuery } from 'queries/donuts.queries';
import { useNavigate } from 'react-router';
import { DONUTS_ROUTE } from 'routes/routes';
import IDonut from 'types/IDonut';


interface IUseDonutsPageSuccessArgs {
	donuts: Array<IDonut>;
}

export default function useDonuts(args: IUseDonutsPageSuccessArgs) {
	const navigate = useNavigate();
	const listDonutsQuery = useListDonutsQuery()


	function onCardClick(donut: IDonut) {
		navigate(`${DONUTS_ROUTE}/${donut.id}`)
	}

	return {
		donuts: listDonutsQuery,
		onCardClick
	}
}



