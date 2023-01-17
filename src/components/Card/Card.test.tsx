import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('<Card/>', () => {
	it('should show a card when is loaded', () => {
		const dummyDonut = {
			id: 'dummy_id',
			name: 'dummy_donut_name',
			inStock: true,
			description: 'dummy_donut_description',
			allergens: ['soy', 'milk'],
		};

		render(
			<Card
				id={dummyDonut.id}
				name={dummyDonut.name}
				inStock={dummyDonut.inStock}
				description={dummyDonut.description}
				allergens={dummyDonut.allergens}
			/>
		);

		expect(screen.getByTestId('donut-card') as HTMLImageElement).toBeVisible();
		expect(screen.getByTestId('donut-name') as HTMLElement).toBeVisible();
	});

	it('should show a description when the user make hover', () => {});
});
