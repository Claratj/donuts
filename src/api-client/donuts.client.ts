import IDonut from 'types/IDonut';

const DONUTS_ENDPOINT = '/overview/donuts';

function list(): Promise<IDonut[]> {

	return fetch(`https://example.com/${DONUTS_ENDPOINT}`).then(res => res.json()).then((raw) => {
		return {...raw}
	});
}

function details(args: {id:string}) : Promise<IDonut> {
	return fetch(`https://example.com/${DONUTS_ENDPOINT}/${args.id}`).then((res)=> res.json()).then((raw)=> {
		return {...raw, id: args.id}
	})
}



export default {
	list,
	details
};
