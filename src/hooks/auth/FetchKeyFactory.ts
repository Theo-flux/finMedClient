import { AUTH } from '@/constants/api';

export const auth = {
  getProfile() {
    return {
      path: AUTH.PROFILE,
      keys: () => [AUTH.PROFILE] as const
    };
  }
};
