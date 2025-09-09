import { TLoginSchema } from '@/features/auth/login/validations';
import { TPwdResetSchema } from '@/features/auth/forgot-password/validations';
import { AUTH, USER } from '@/constants/api';
import finMedServer from '@/servers/finMed';
import { Stores } from '@/store';
import { TUserSchema } from '@/features/staff/components/modals/CreateStaff';

// post
export const postUserLogin = (payload: TLoginSchema) =>
  finMedServer.post<IFinMedServerRes<TLoginRes>>(AUTH.LOGIN, payload);

export const postUserCreate = (payload: TUserSchema) => {
  return finMedServer.post<IFinMedServerRes<boolean>>(AUTH.REGISTER_USER, payload);
};

// patch
export const patchUserUpdate = ({ uid, payload }: { uid: string; payload: Partial<TUserSchema> }) =>
  finMedServer.patch<IFinMedServerRes<boolean>>(`${USER.ALL}/${uid}`, payload);

export const getNewToken = () =>
  finMedServer.get<IFinMedServerRes<TLoginRes>>(AUTH.NEW_TOKEN, {
    headers: {
      Authorization: 'Bearer ' + Stores.AuthStore.refreshToken
    },
    withCredentials: true
  });

export const postPwdReset = (payload: Omit<TPwdResetSchema, 'confirm_password'>) =>
  finMedServer.post<IFinMedServerRes<TLoginRes>>(AUTH.RESET_PWD, payload);

// get
export const getLogout = () => finMedServer.get<IFinMedServerRes<boolean>>(AUTH.LOGOUT);
