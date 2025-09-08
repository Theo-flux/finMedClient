import { BUDGET, EXPENSE } from '@/constants/api';

export const expense = {
  getExpense(uid: string) {
    return {
      path: EXPENSE.SINGLE.replace(':uid', uid),
      keys: () => [BUDGET.CREATE, EXPENSE.CREATE, EXPENSE.SINGLE, uid] as const
    };
  },

  getAllExpenses(query: Partial<TExpensesQuery>) {
    return {
      path: EXPENSE.CREATE,
      keys: () => [BUDGET.CREATE, EXPENSE.CREATE, query] as const,
      params: query
    };
  }
};
