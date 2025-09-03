import { useQuery } from '@tanstack/react-query';
import { budget } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TSingleBudgetResponse>) {
  return resp.data;
}

export function useFetchBudget(uid: string): IQueryHookResponse<TSingleBudgetResponse | undefined> {
  const meta = budget.getSingleBudget(uid);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
