import { useQuery } from '@tanstack/react-query';
import { user } from './FetchKeyFactory';
import { useCallback } from 'react';
import { toJS } from 'mobx';

function select(resp: IFinMedServerPaginatedRes<TUserInfoItem>) {
  return resp.data;
}

export function useFetchUsers(
  query: TUserQuery
): IQueryHookResponse<IFinMedServerPaginatedRes<TUserInfoItem>['data'] | undefined> {
  console.log(toJS(query));
  const meta = user.getUsers(query);
  const memoizedSelect = useCallback(select, []);

  const { data, isLoading, error, status } = useQuery({
    queryKey: meta.keys(),
    meta,
    select: memoizedSelect
  });

  return { data, isLoading, error, status };
}
