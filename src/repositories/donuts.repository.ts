import donutsClient, { IListDonutsResponse } from 'api-client/donuts.client';
import IDonut from 'types/IDonut';

function list(): Promise<IListDonutsResponse> {
	return donutsClient.list();
}

function details(args: { id: string }): Promise<IDonut> {
	return donutsClient.details(args);
}

export default {
	list,
	details,
};
