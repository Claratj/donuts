import { useListDonutsQuery } from 'queries/donuts.queries';
import IDonut from 'types/IDonut';

export default function useDonuts() {
	const listDonutsQuery = useListDonutsQuery();

	return {
		props: {
			donuts: listDonutsQuery.data?.donuts as IDonut[],
			serverError: listDonutsQuery.error?.message || '',
		},
		status: listDonutsQuery.status,
	};
}
