type Option = { value: string; label: string; disable?: boolean };

interface SessionPayload extends Pick<TProfileInfo, 'id' | 'roles'> {
  token: string;
  exp?: number;
}

type TLoginRes = {
  access_token: string;
  refresh_token: string;
  user_type: string;
};

interface IFinMedServerRes<T> {
  data: T;
  message: string;
}

interface IQueryHookResponse<D> {
  data: D;
  isLoading: boolean;
  error: unknown;
  status: 'error' | 'success' | 'pending';
}

type TPaginatedRes = {
  total: number;
  current_page: number;
  limit: number;
  total_pages: number;
};

interface IFinMedServerPaginatedRes<T> {
  data: {
    items: Array<T>;
    pagination: TPaginatedRes;
  };
  message: string;
}

type TResource = {
  uid: string;
  created_at: string;
  updated_at: string;
  id: number;
  name: string;
  status: string;
};

type TProfileInfo = {
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
  role: TResource;
  department: TResource;
};

type TFinMedServerQuery = {
  limit: number;
  offset: number;
  q: string | null;
};
