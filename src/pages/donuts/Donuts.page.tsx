import WithQuery from 'utils/WithQuery';
import DonutsFailedPage from './components/DonutFailed.page';
import DonutsLoadingPage from './components/DonutsLoading.page';
import DonutsSuccessPage from './components/DonutsPageSuccess/DonutsSuccess.page';
import useDonuts from './useDonuts';

export default WithQuery({
	Component: DonutsSuccessPage,
	Error: DonutsFailedPage,
	Loader: DonutsLoadingPage,
	useHook: useDonuts,
});
