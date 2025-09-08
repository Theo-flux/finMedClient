import { useQuery } from '@tanstack/react-query';
import { invoice } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TPaymentItem>) {
  return resp.data;
}

export function useFetchInvoicePayments(
  uid: string,
  query: Partial<TPaymentQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TPaymentItem>['data'] | undefined> {
  const meta = invoice.getInvoicePayments(uid, query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
