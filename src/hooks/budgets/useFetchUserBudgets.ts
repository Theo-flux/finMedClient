import { useQuery } from '@tanstack/react-query';
import { budget } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TSingleBudgetResponse>) {
  return resp.data;
}

export function useFetchUserBudgets(
  query: Partial<TBudgetQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TSingleBudgetResponse>['data'] | undefined> {
  const meta = budget.getUserBudgets(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
