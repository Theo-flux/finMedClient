import { AUTH } from '@/constants/api';

export const user = {
  getUsers() {
    return {
      path: AUTH.PROFILE,
      keys: () => [AUTH.PROFILE] as const
    };
  }
};
