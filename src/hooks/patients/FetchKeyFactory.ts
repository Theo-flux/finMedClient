import { PATIENT } from '@/constants/api';

export const patient = {
  getPatient(uid: string) {
    return {
      path: PATIENT.SINGLE.replace(':uid', uid),
      keys: () => [PATIENT.CREATE, PATIENT.SINGLE, uid] as const
    };
  },

  getAllPatients(query: Partial<TPatientQuery>) {
    return {
      path: PATIENT.CREATE,
      keys: () => [PATIENT.CREATE, query] as const,
      params: query
    };
  }
};
