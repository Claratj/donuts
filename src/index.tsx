import { worker } from 'mocks/browser';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (process.env.NODE_ENV === 'development') {
	worker.start();
	// (window as any).__MSW__STOP = worker.stop;
	// (window as any).__MSW__START = worker.start;
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

serviceWorker.unregister();
