import { EXPENSE } from '@/constants/api';
import finMedServer from '@/servers/finMed';
import { TExpenseSchema } from '@/features/budgets/budgetId/components/modals/ExpenseModal';

export const postCreateExpense = (payload: TExpenseSchema) =>
  finMedServer.post<IFinMedServerRes<boolean>>(EXPENSE.CREATE, payload);

export const patchExpense = ({ uid, payload }: { uid: string; payload: Partial<TExpenseSchema> }) =>
  finMedServer.patch<IFinMedServerRes<boolean>>(EXPENSE.SINGLE.replace(':uid', uid), payload);

export const deleteExpense = (uid: string) =>
  finMedServer.delete<IFinMedServerRes<boolean>>(EXPENSE.SINGLE.replace(':uid', uid));
