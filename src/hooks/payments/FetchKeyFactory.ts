import { INVOICE, PAYMENT } from '@/constants/api';

export const payment = {
  getPayment(uid: string) {
    return {
      path: PAYMENT.SINGLE.replace(':uid', uid),
      keys: () => [INVOICE.CREATE, PAYMENT.CREATE, PAYMENT.SINGLE, uid] as const
    };
  },

  getAllPayments(query: Partial<TPaymentQuery>) {
    return {
      path: PAYMENT.CREATE,
      keys: () => [INVOICE.CREATE, PAYMENT.CREATE, query] as const,
      params: query
    };
  }
};
