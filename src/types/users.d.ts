type TAbrigedUser = {
  uid: string;
  created_at: string;
  updated_at: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  staff_no: string;
};

type TUserInfoItem = {
  id: number;
  uid: string;
  created_at: string;
  updated_at: string;
  staff_no: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  status: string;
  phone_number: string;
  role_uid: string;
  department_uid: string;
  last_login?: string;
  role: TResource;
  department: TResource;
};

type TUserQuery = TFinMedServerQuery & {
  user_status: string | null;
  staff_no: string | null;
};
