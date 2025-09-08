import { useQuery } from '@tanstack/react-query';
import { invoice } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TInvoiceItem>) {
  return resp.data;
}

export function useFetchInvoices(
  query: Partial<TInvoiceQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TInvoiceItem>['data'] | undefined> {
  const meta = invoice.getInvoices(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
