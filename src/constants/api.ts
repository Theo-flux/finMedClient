export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER_USER: '/auth/register',
  NEW_TOKEN: '/auth/new-access-token',
  RESET_PWD: '/auth/pwd-reset',
  USER_INFO: '/auth/profile',
  LOGOUT: '/auth/logout',
  PROFILE: '/auth/profile'
} as const;

export const USER = {
  ALL: '/users'
};

export const MISC = {
  ALL: '/misc/all',
  ROLE: '/roles',
  DEPT: '/depts',
  SERVICE: '/services',
  CATEGORY: '/categories'
};

export const BUDGET = {
  CREATE: '/budgets',
  USER_BUDGETS: '/budgets/user_budgets',
  ASSIGNED_BUDGETS: '/budgets/user_assigned_budgets'
};

export const DEFAULT_LIMIT = 30;
export const DEFAULT_OFFSET = 0;
