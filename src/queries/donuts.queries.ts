
import { useQuery, UseQueryOptions } from 'react-query';
import donutsRepository from 'repositories/donuts.repository';
import IError from 'types/IError';

interface IUseListDonutsQueryArgs
  extends UseQueryOptions<Awaited<ReturnType<typeof donutsRepository.list>>, IError> {}

export function useListDonutsQuery(args?: IUseListDonutsQueryArgs) {
  return useQuery({
    queryKey: ['donuts', 'list'],
    queryFn: donutsRepository.list,
    ...args,
  });
}

interface IUseDetailsDonutsQueryArgs
  extends UseQueryOptions<Awaited<ReturnType<typeof donutsRepository.details>>, IError> {
  id: string;
}

export function useDetailsCardsQuery(args: IUseDetailsDonutsQueryArgs) {
  return useQuery({
    queryKey: ['donuts', 'details', args.id],
    queryFn: () => donutsRepository.details({ id: args.id }),
    ...args,
  });
}
