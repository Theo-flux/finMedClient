import { useQuery } from '@tanstack/react-query';
import { patient } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TInvoiceItem>) {
  return resp.data;
}

export function useFetchPatientInvoices(
  uid: string,
  query: Partial<TPaymentQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TInvoiceItem>['data'] | undefined> {
  const meta = patient.getPatientInvoices(uid, query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
