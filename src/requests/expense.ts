import { EXPENSE } from '@/constants/api';
import finMedServer from '@/servers/finMed';
import { TBudgetSchema } from '@/features/budgets/components/modals/BudgetModal';
import { TExpenseSchema } from '@/features/budgets/budgetId/components/modals/ExpenseModal';

export const postCreateExpense = (payload: TExpenseSchema) =>
  finMedServer.post<IFinMedServerRes<boolean>>(EXPENSE.CREATE, payload);

export const patchExpense = ({ uid, payload }: { uid: string; payload: Partial<TBudgetSchema> }) =>
  finMedServer.patch<IFinMedServerRes<TLoginRes>>(`${EXPENSE.CREATE}/${uid}`, payload);

export const deleteExpense = (uid: string) =>
  finMedServer.delete<IFinMedServerRes<boolean>>(`${EXPENSE.CREATE}/${uid}`);
