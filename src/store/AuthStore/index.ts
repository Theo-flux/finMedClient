import initializer from "@/utils/initializer";
import { RootStore } from "..";
import store from "store2";
import { action, flow, makeObservable, observable } from "mobx";
import { TLogin } from "@/features/auth/login/validations";
import { TPwdResetSchema } from "@/features/auth/forgot-password/validations";
import {
  postUserLogin,
  getNewToken,
  getProfile,
  postPwdReset,
  getLogout,
} from "@/requests/auth";
import { parseError } from "@/utils/errorHandler";
import { useStyledToast } from "@/hooks/app/useStyledToast";
import { Mangle } from "@/constants/mangle";

// eslint-disable-next-line react-hooks/rules-of-hooks
const toast = useStyledToast();

const INIT_IS_LOADING = {
  logout: false,
  login: false,
  request: false,
  reset: false,
  forgotPwd: false,
  refresh: false,
  verify: false,
};

export function persist<T = string>(key: string, value: T) {
  store.namespace("auth").local.set(key, value);
  return value;
}

function get<T = string>(key: string, fallback?: T) {
  return store.namespace("auth").local.get(key, fallback) as T;
}

function del(key: string) {
  return store.namespace("auth").local.remove(key);
}

class AuthStore {
  rootStore: RootStore;
  user = get<Partial<TProfileInfo>>(Mangle.USER, {});
  userType: string = "";
  accessToken = get(Mangle.ACCESS_TOKEN, "");
  refreshToken = get(Mangle.REFRESH_TOKEN, "");
  isLoading = { ...INIT_IS_LOADING };
  errors = initializer(this.isLoading, "");

  constructor(_rootStore: RootStore) {
    this.rootStore = _rootStore;

    makeObservable(this, {
      user: observable,
      userType: observable,
      accessToken: observable,
      refreshToken: observable,
      isLoading: observable,
      errors: observable,

      reset: action.bound,
      resetStores: action.bound,
      setTokens: action.bound,

      logout: flow.bound,
      login: flow.bound,
      fetchNewToken: flow.bound,
      resetPwd: flow.bound,
    });
  }

  reset() {
    this.accessToken = "";
    this.refreshToken = "";
    this.isLoading = { ...INIT_IS_LOADING };
    this.errors = initializer(this.isLoading, "");
    del(Mangle.USER);
    this.user = {};
  }

  resetStores() {
    this.reset();
    this.rootStore.AppConfigStore.toggleModals();
    store.clearAll();
  }

  setTokens(token: string, refreshToken: string) {
    this.accessToken = persist(Mangle.ACCESS_TOKEN, token);
    this.refreshToken = persist(Mangle.REFRESH_TOKEN, refreshToken);
  }

  *logout(cb?: () => void) {
    this.isLoading.login = true;
    try {
      yield getLogout();
      this.resetStores();

      toast.success("You have been sucessfully logged out!");
      if (cb) {
        cb();
      } else {
        window.location.href = "/auth/login";
      }
    } catch (error) {
      toast.error(parseError(error));
      this.errors.logout = parseError(error);
      setTimeout(() => {
        this.errors.logout = "";
      }, 5000);
    } finally {
      this.isLoading.login = false;
    }
  }

  *login(_payload: TLogin, cb?: () => void) {
    this.isLoading.login = true;
    this.errors.login = "";
    try {
      const {
        data: { data },
      } = (yield postUserLogin(_payload)) as {
        data: IFinMedServerRes<TLoginRes>;
      };
      this.setTokens(data.access_token, data.refresh_token);

      const profileRes = (yield getProfile()) as {
        data: IFinMedServerRes<TProfileInfo>;
      };

      this.user = persist(Mangle.USER, profileRes.data.data);

      toast.info("Welcome back!");
      cb?.();
    } catch (error) {
      this.errors.login = parseError(error);
      toast.error(this.errors.login);
    } finally {
      this.isLoading.login = false;
    }
  }

  *fetchNewToken() {
    this.isLoading.refresh = true;
    try {
      const { data } = (yield getNewToken()) as { data: TLoginRes };

      this.setTokens(data.access_token, data.refresh_token);

      return { token: this.accessToken, refreshToken: this.refreshToken };
    } catch (error) {
      this.errors.refresh = parseError(error);
    } finally {
      this.isLoading.refresh = false;
    }
  }

  *resetPwd(_payload: TPwdResetSchema, cb?: () => void) {
    this.isLoading.reset = true;
    this.errors.reset = "";
    try {
      const { email, new_password } = _payload;
      yield postPwdReset({ email, new_password });

      toast.success("Password has set!");
      cb?.();
    } catch (error) {
      this.errors.reset = parseError(error);
    } finally {
      this.isLoading.reset = false;
    }
  }
}

export default AuthStore;
