import { BUDGET } from '@/constants/api';
import finMedServer from '@/servers/finMed';
import { TBudgetSchema } from '@/features/budgets/components/modals/BudgetModal';

export const postCreateBudget = (payload: TBudgetSchema) => {
  return finMedServer.post<IFinMedServerRes<boolean>>(BUDGET.CREATE, {
    ...payload,
    gross_amount: Number(payload.gross_amount)
  });
};

export const patchBudget = ({ uid, payload }: { uid: string; payload: Partial<TBudgetSchema> }) => {
  const newPayload = { ...payload };

  if (newPayload.gross_amount) {
    newPayload.gross_amount = Number(payload.gross_amount) as unknown as string;
  }
  return finMedServer.patch<IFinMedServerRes<TLoginRes>>(`${BUDGET.CREATE}/${uid}`, {
    ...newPayload
  });
};
