import { INVOICE, PATIENT } from '@/constants/api';

export const patient = {
  getAllPatients(query: Partial<TPatientQuery>) {
    return {
      path: PATIENT.CREATE,
      keys: () => [PATIENT.CREATE, query] as const,
      params: query
    };
  },

  getPatient(uid: string) {
    return {
      path: PATIENT.SINGLE.replace(':uid', uid),
      keys: () => [PATIENT.CREATE, PATIENT.SINGLE, uid] as const
    };
  },

  getPatientInvoices(uid: string, query: Partial<TInvoiceQuery>) {
    return {
      path: PATIENT.INVOICES.replace(':uid', uid),
      keys: () => [INVOICE.CREATE, PATIENT.INVOICES, uid, query] as const,
      params: query
    };
  }
};
