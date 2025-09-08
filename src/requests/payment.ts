import { PAYMENT } from '@/constants/api';
import { TPaymentSchema } from '@/features/invoice/invoiceId/components/modals/PaymentModal';
import finMedServer from '@/servers/finMed';

export const postCreatePayment = (payload: TPaymentSchema) =>
  finMedServer.post<IFinMedServerRes<boolean>>(PAYMENT.CREATE, payload);

export const patchPayment = ({ uid, payload }: { uid: string; payload: Partial<TPaymentSchema> }) =>
  finMedServer.patch<IFinMedServerRes<TLoginRes>>(PAYMENT.SINGLE.replace(':uid', uid), payload);

export const deletePayment = (uid: string) =>
  finMedServer.delete<IFinMedServerRes<boolean>>(PAYMENT.SINGLE.replace(':uid', uid));
