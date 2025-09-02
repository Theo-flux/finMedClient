import { MISC } from '@/constants/api';

export const misc = {
  getRoles() {
    return {
      path: MISC.ROLE,
      keys: () => [MISC.ALL, MISC.ROLE] as const
    };
  },

  getDepts() {
    return {
      path: MISC.DEPT,
      keys: () => [MISC.ALL, MISC.DEPT] as const
    };
  },

  getService() {
    return {
      path: MISC.SERVICE,
      keys: () => [MISC.ALL, MISC.SERVICE] as const
    };
  },

  getCategory() {
    return {
      path: MISC.CATEGORY,
      keys: () => [MISC.ALL, MISC.CATEGORY] as const
    };
  }
};
