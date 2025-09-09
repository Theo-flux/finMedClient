import { PATIENT } from '@/constants/api';
import { TPatientSchema } from '@/features/patients/components/modal/PatientModal';
import finMedServer from '@/servers/finMed';

export const postCreatePatient = (payload: Partial<TPatientSchema>) => {
  return finMedServer.post<IFinMedServerRes<boolean>>(PATIENT.CREATE, payload);
};

export const patchPatient = ({
  uid,
  payload
}: {
  uid: string;
  payload: Partial<TPatientSchema>;
}) => {
  return finMedServer.patch<IFinMedServerRes<boolean>>(`${PATIENT.CREATE}/${uid}`, payload);
};

export const deletePatient = (uid: string) =>
  finMedServer.delete<IFinMedServerRes<boolean>>(`${PATIENT.CREATE}/${uid}`);
