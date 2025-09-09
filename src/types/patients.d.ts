type TPatientItem = {
  uid: string;
  created_at: string;
  updated_at: string;
  id: number;
  first_name: string;
  last_name: string;
  other_name: string;
  gender: string;
  user_uid: string;
  phone_number: string;
  hospital_id: string;
  patient_type: string;
  user: TAbrigedUser;
};
type TPatientQuery = TFinMedServerQuery & { patient_type: string | null };
