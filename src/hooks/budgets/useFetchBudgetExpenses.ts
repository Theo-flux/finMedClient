import { useQuery } from '@tanstack/react-query';
import { budget } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TExpensesItem>) {
  return resp.data;
}

export function useFetchBudgetExpenses(
  uid: string,
  query: Partial<TExpensesQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TExpensesItem>['data'] | undefined> {
  const meta = budget.getBudgetExpenses(uid, query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
