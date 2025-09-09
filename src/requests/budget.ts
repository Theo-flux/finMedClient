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
    newPayload.gross_amount = Number(payload.gross_amount);
  }
  return finMedServer.patch<IFinMedServerRes<boolean>>(`${BUDGET.CREATE}/${uid}`, {
    ...newPayload
  });
};

export const patchBudgetAvailability = ({
  uid,
  availability
}: {
  uid: string;
  availability: string;
}) =>
  finMedServer.patch<IFinMedServerRes<boolean>>(BUDGET.AVAILABILITY.replace(':uid', uid), {
    availability
  });

export const patchBudgetStatus = ({ uid, budget_status }: { uid: string; budget_status: string }) =>
  finMedServer.patch<IFinMedServerRes<boolean>>(BUDGET.STATUS.replace(':uid', uid), {
    budget_status
  });

export const deleteBudget = (uid: string) =>
  finMedServer.delete<IFinMedServerRes<boolean>>(`${BUDGET.CREATE}/${uid}`);
