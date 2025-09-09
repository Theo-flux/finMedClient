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
  ASSIGNED_BUDGETS: '/budgets/user_assigned_budgets',
  EXPENSES: '/budgets/:uid/expenses',
  AVAILABILITY: '/budgets/:uid/availability',
  STATUS: '/budgets/:uid/status'
};

export const EXPENSE = {
  CREATE: '/expenses',
  SINGLE: '/expenses/:uid'
};

export const INVOICE = {
  CREATE: '/invoices',
  SINGLE: '/invoices/:uid',
  PAYMENTS: '/invoices/:uid/payments',
  PATIENTS: '/invoices/:uid/patients'
};

export const PAYMENT = {
  CREATE: '/payments',
  SINGLE: '/payments/:uid'
};

export const PATIENT = {
  CREATE: '/patients',
  SINGLE: '/patients/:uid',
  INVOICES: '/patients/:uid/invoices',
  PAYMENTS: '/patients/:uid/payments'
};

export const DEFAULT_LIMIT = 30;
export const DEFAULT_OFFSET = 0;
