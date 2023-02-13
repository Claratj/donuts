import { render, screen } from '@testing-library/react';
import IDonut from 'types/IDonut';
import Card from './Card';

describe('<Card/>', () => {
	xit('should show a card when is loaded', () => {
		const dummyDonut: IDonut = {
			id: 'dummy_id',
			name: 'dummy_donut_name',
			imageUrl: 'dummy_image',
			inStock: true,
			description: 'dummy_donut_description',
			allergens: ['soy', 'milk'],
		};

		render(
			<Card
				id={dummyDonut.id}
				name={dummyDonut.name}
				imageUrl={dummyDonut.imageUrl}
				inStock={dummyDonut.inStock}
				description={dummyDonut.description}
				allergens={dummyDonut.allergens}
			/>
		);

		expect(screen.getByTestId('donut-card') as HTMLImageElement).toBeVisible();
		expect(screen.getByTestId('donut-name') as HTMLElement).toBeVisible();
	});

	xit('should show a description when the user make hover over the card element', () => {});
});
