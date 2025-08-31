import { useQuery } from '@tanstack/react-query';
import { auth } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TProfileInfo>) {
  return resp.data;
}

export function useFetchProfile(disabled?: boolean): IQueryHookResponse<TProfileInfo | undefined> {
  const meta = auth.getProfile();
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !disabled,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
