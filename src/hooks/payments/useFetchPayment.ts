import { useQuery } from '@tanstack/react-query';
import { payment } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TPaymentItem>) {
  return resp.data;
}

export function useFetchPayment(uid: string): IQueryHookResponse<TPaymentItem | undefined> {
  const meta = payment.getPayment(uid);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
