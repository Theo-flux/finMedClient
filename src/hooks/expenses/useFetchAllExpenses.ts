import { useQuery } from '@tanstack/react-query';
import { expense } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TExpensesItem>) {
  return resp.data;
}

export function useFetchAllExpenses(
  query: Partial<TExpensesQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TExpensesItem>['data'] | undefined> {
  const meta = expense.getAllExpenses(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
