import { INVOICE } from '@/constants/api';
import { TInvoiceSchema } from '@/features/invoice/components/modals/InvoiceModal';
import finMedServer from '@/servers/finMed';

export const postCreateInvoice = (payload: Partial<TInvoiceSchema>) => {
  return finMedServer.post<IFinMedServerRes<boolean>>(INVOICE.CREATE, {
    ...payload,
    gross_amount: Number(payload.gross_amount)
  });
};

export const patchInvoice = ({
  uid,
  payload
}: {
  uid: string;
  payload: Partial<TInvoiceSchema>;
}) => {
  const newPayload = { ...payload };

  if (newPayload.gross_amount) {
    newPayload.gross_amount = Number(payload.gross_amount);
  }
  return finMedServer.patch<IFinMedServerRes<boolean>>(`${INVOICE.CREATE}/${uid}`, {
    ...newPayload
  });
};

export const deleteInvoice = (uid: string) =>
  finMedServer.delete<IFinMedServerRes<boolean>>(`${INVOICE.CREATE}/${uid}`);
