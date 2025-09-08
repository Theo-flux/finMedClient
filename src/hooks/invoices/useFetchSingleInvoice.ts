import { useQuery } from '@tanstack/react-query';
import { invoice } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TInvoiceItem>) {
  return resp.data;
}

export function useFetchSingleInvoice(uid: string): IQueryHookResponse<TInvoiceItem | undefined> {
  const meta = invoice.getSingleInvoice(uid);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
