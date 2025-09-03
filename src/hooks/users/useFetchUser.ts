import { useQuery } from '@tanstack/react-query';
import { user } from './FetchKeyFactory';
import { useCallback } from 'react';

function select(resp: IFinMedServerRes<TUserInfoItem>) {
  return resp.data;
}

export function useFetchUser(uid: string): IQueryHookResponse<TUserInfoItem | undefined> {
  const meta = user.getUser(uid);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    enabled: !!uid,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
