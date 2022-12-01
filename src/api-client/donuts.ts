import IDonut from 'types/IDonut';

const DONUTS_ENDPOINT = '/overview/donuts';


export interface ICardsReadResponse {
	donuts: Array<IDonut>;
}

export function list(): Promise<IDonutslistResponse> {

	return fetch(`https://example.com/${DONUTS_ENDPOINT}`).then(res => res.json()).then((raw) => {
		return {...raw}
	});
}

export default {
	list,
};
