import IDonut from 'types/IDonut';

const DONUTS_ENDPOINT = 'overview/donuts';

export interface IListDonutsResponse {
	donuts: Array<IDonut>;
}

function list(): Promise<IListDonutsResponse> {
	return fetch(`http://localhost:3000/${DONUTS_ENDPOINT}`)
		.then((res) => {
			return res.json();
		})
		.then((raw) => {
			return { ...raw };
		});
}

function details(args: { id: string }): Promise<IDonut> {
	return fetch(`http://localhost:3000/${DONUTS_ENDPOINT}/${args.id}`)
		.then((res) => res.json())
		.then((raw) => {
			return { ...raw, id: args.id };
		});
}

export default {
	list,
	details,
};
