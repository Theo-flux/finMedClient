import { useQuery } from '@tanstack/react-query';
import { payment } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TPaymentItem>) {
  return resp.data;
}

export function useFetchAllPayments(
  query: Partial<TPaymentQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TPaymentItem>['data'] | undefined> {
  const meta = payment.getAllPayments(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
