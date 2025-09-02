import { useQuery } from '@tanstack/react-query';
import { misc } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<Array<TResource>>) {
  return resp.data;
}

export function useFetchRoles(
  disabled?: boolean
): IQueryHookResponse<Array<TResource> | undefined> {
  const meta = misc.getRoles();
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !disabled,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
