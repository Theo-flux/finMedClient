import { useQuery } from '@tanstack/react-query';
import { expense } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TExpensesItem>) {
  return resp.data;
}

export function useFetchExpense(uid: string): IQueryHookResponse<TExpensesItem | undefined> {
  const meta = expense.getExpense(uid);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
