export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER_USER: '/auth/register',
  NEW_TOKEN: '/auth/new-access-token',
  RESET_PWD: '/auth/pwd-reset',
  USER_INFO: '/auth/profile',
  LOGOUT: '/auth/logout',
  PROFILE: '/auth/profile'
} as const;

export const USER = {};

export const MISC = {
  ALL: '/misc/all',
  ROLE: '/roles',
  DEPT: '/depts',
  SERVICE: '/services',
  CATEGORY: '/categories'
};
