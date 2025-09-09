import { useQuery } from '@tanstack/react-query';
import { patient } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TPatientItem>) {
  return resp.data;
}

export function useFetchPatient(uid: string): IQueryHookResponse<TPatientItem | undefined> {
  const meta = patient.getPatient(uid);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
