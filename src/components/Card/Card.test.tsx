import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('<Card/>', () => {
	it('should show a card when is loaded', () => {
		render(<Card />);

		expect(screen.getByTestId('donut-card') as HTMLImageElement).toBeVisible();
		expect(screen.getByTestId('donut-name') as HTMLElement).toBeVisible();
	});

	it('should show a description when the user make hover', () => {});
});
