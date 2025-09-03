import { USER } from '@/constants/api';

export const user = {
  getUsers(query: TUserQuery) {
    return {
      path: USER.ALL,
      keys: () => [USER.ALL, query] as const,
      params: query
    };
  },

  getUser(uid: string) {
    return {
      path: `${USER.ALL}/${uid}`,
      keys: () => [USER.ALL, uid] as const
    };
  }
};
