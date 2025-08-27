import { TLogin } from "@/features/auth/login/validations";
import { TPwdResetSchema } from "@/features/auth/forgot-password/validations";
import { AUTH } from "@/constants/api";
import finMedServer from "@/servers/finMed";
import { Stores } from "@/store";

// post
export const postUserLogin = (payload: TLogin) =>
  finMedServer.post<IFinMedServerRes<TLoginRes>>(AUTH.LOGIN, payload);

export const getNewToken = () =>
  finMedServer.get<IFinMedServerRes<TLoginRes>>(AUTH.NEW_TOKEN);

export const postPwdReset = (
  payload: Omit<TPwdResetSchema, "confirm_password">,
) => finMedServer.post<IFinMedServerRes<TLoginRes>>(AUTH.RESET_PWD, payload);

// get
export const getLogout = () =>
  finMedServer.get<IFinMedServerRes<boolean>>(AUTH.LOGOUT);

export const getProfile = () =>
  finMedServer.get<IFinMedServerRes<TProfileInfo>>(AUTH.USER_INFO, {headers: {
    "Authorization": "Bearer " + Stores.AuthStore.refreshToken
  }});
