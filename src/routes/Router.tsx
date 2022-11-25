import DonutPage from 'pages/donut/Donut.page';
import DonutsPage from 'pages/donuts/Donuts.page';
import NotFoundPage from 'pages/notFound/NotFound.page';
import OverviewPage from 'pages/overview/Overview.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<OverviewPage />} />
				<Route path="donuts" element={<DonutsPage />} />
				<Route path="donuts/:id" element={<DonutPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
