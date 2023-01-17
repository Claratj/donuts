import { Navigate } from 'react-router-dom';
import { ERROR_ROUTE } from 'routes/routes';

export default function ErrorComponent() {
	return <Navigate to={ERROR_ROUTE} />;
}
