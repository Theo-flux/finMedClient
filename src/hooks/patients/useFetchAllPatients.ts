import { useQuery } from '@tanstack/react-query';
import { patient } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerPaginatedRes<TPatientItem>) {
  return resp.data;
}

export function useFetchAllPatients(
  query: Partial<TPatientQuery>
): IQueryHookResponse<IFinMedServerPaginatedRes<TPatientItem>['data'] | undefined> {
  const meta = patient.getAllPatients(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
