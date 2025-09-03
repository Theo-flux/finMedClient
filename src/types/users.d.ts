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

type TUserQuery = {
  limit: number;
  offset: number;
  userStatus: string | null;
  staff_no: string | null;
  q: string | null;
};
