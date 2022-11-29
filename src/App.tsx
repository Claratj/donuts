import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'routes/Router';
import './App.css';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />;
		</QueryClientProvider>
	);
}
