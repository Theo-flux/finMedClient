import { useQuery } from '@tanstack/react-query';
import { budget } from './FetchKeyFactory';
import { useCallback } from 'react';
import { toJS } from 'mobx';

function select(resp: IFinMedServerPaginatedRes<TSingleBudgetResponse>) {
  return resp.data;
}

export function useFetchUserBudgets(
  query: Partial<TBudgetQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TSingleBudgetResponse>['data'] | undefined> {
  console.log(toJS(query));
  const meta = budget.getUserBudgets(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
