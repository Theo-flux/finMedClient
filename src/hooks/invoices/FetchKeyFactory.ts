import { INVOICE } from '@/constants/api';

export const invoice = {
  getInvoices(query: Partial<TInvoiceQuery>) {
    return {
      path: INVOICE.CREATE,
      keys: () => [INVOICE.CREATE, query] as const,
      params: query
    };
  },

  getSingleInvoice(uid: string) {
    return {
      path: INVOICE.SINGLE.replace(':uid', uid),
      keys: () => [INVOICE.CREATE, INVOICE.SINGLE, uid] as const
    };
  },

  getInvoicePayments(uid: string, query: Partial<TPaymentQuery>) {
    return {
      path: INVOICE.PAYMENTS.replace(':uid', uid),
      keys: () => [INVOICE.CREATE, INVOICE.PAYMENTS, uid, query] as const,
      params: query
    };
  }
};
