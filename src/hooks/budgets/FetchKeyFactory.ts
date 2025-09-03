import { BUDGET } from '@/constants/api';

export const budget = {
  getUserBudgets(query: Partial<TBudgetQuery>) {
    return {
      path: BUDGET.USER_BUDGETS,
      keys: () => [BUDGET.USER_BUDGETS, query] as const,
      params: query
    };
  },

  getAssignedBudgets(query: Partial<TBudgetQuery>) {
    return {
      path: BUDGET.ASSIGNED_BUDGETS,
      keys: () => [BUDGET.ASSIGNED_BUDGETS, query] as const
    };
  }
};
