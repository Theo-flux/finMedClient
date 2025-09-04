import { BUDGET, EXPENSE } from '@/constants/api';

export const expense = {
  getExpense(uid: string) {
    return {
      path: `${EXPENSE.CREATE}/${uid}`,
      keys: () => [BUDGET.CREATE, EXPENSE.CREATE, uid] as const
    };
  }
};
