import initializer from '@/utils/initializer';
import { RootStore } from '..';
import store from 'store2';
import { action, flow, makeObservable, observable } from 'mobx';
import { TLoginSchema } from '@/features/auth/login/validations';
import { TPwdResetSchema } from '@/features/auth/forgot-password/validations';
import { postUserLogin, getNewToken, postPwdReset, getLogout } from '@/requests/auth';
import { parseError } from '@/utils/errorHandler';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { EnumUserType, Mangle } from '@/constants/mangle';
import { AppModals } from '../AppConfig/appModalTypes';

// eslint-disable-next-line react-hooks/rules-of-hooks
const toast = useStyledToast();

const INIT_IS_LOADING = {
  logout: false,
  login: false,
  request: false,
  reset: false,
  forgotPwd: false,
  refresh: false,
  verify: false
};

export function persist<T = string>(key: string, value: T) {
  store.namespace('auth').local.set(key, value);
  return value;
}

function get<T = string>(key: string, fallback?: T) {
  return store.namespace('auth').local.get(key, fallback) as T;
}

function del(key: string) {
  return store.namespace('auth').local.remove(key);
}

class AuthStore {
  rootStore: RootStore;
  user = get<Partial<TProfileInfo>>(Mangle.AUTH_USER, {});
  userType: string = '';
  accessToken = get(Mangle.ACCESS_TOKEN, '');
  refreshToken = get(Mangle.REFRESH_TOKEN, '');
  isLoading = { ...INIT_IS_LOADING };
  errors = initializer(this.isLoading, '');

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
      setUser: action.bound,
      grantAccess: action.bound,

      logout: flow.bound,
      login: flow.bound,
      fetchNewToken: flow.bound,
      resetPwd: flow.bound
    });
  }

  reset() {
    this.accessToken = '';
    this.refreshToken = '';
    this.isLoading = { ...INIT_IS_LOADING };
    this.errors = initializer(this.isLoading, '');
    del(Mangle.AUTH_USER);
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

  setUser(data: TProfileInfo) {
    this.user = persist(Mangle.AUTH_USER, data);
  }

  grantAccess(access_token: string, refresh_token: string, cb?: (url?: string) => void) {
    this.setTokens(access_token, refresh_token);

    cb?.();
  }

  *logout(cb?: () => void) {
    this.isLoading.login = true;
    try {
      yield getLogout();
      this.resetStores();

      toast.success('You have been sucessfully logged out!');
      if (cb) {
        cb();
      } else {
        window.location.href = '/auth/login';
      }
    } catch (error) {
      toast.error(parseError(error));
      this.errors.logout = parseError(error);
      setTimeout(() => {
        this.errors.logout = '';
      }, 5000);
    } finally {
      this.isLoading.login = false;
    }
  }

  *login(_payload: TLoginSchema, cb?: () => void) {
    this.isLoading.login = true;
    this.errors.login = '';
    try {
      const {
        data: { data }
      } = (yield postUserLogin(_payload)) as {
        data: IFinMedServerRes<TLoginRes>;
      };

      if (data.user_type === EnumUserType.OLD_USER) {
        this.userType = EnumUserType.OLD_USER;
        if (_payload.password && data.access_token && data.refresh_token) {
          this.setTokens(data.access_token, data.refresh_token);

          toast.info('Welcome back!');
          cb?.();
          window.location.replace('/');
        }
      } else {
        this.rootStore.AppConfigStore.toggleModals({
          name: AppModals.SET_PWD_MODAL,
          open: true,
          email_or_staff_no: _payload.email_or_staff_no
        });
      }
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
    this.errors.reset = '';
    try {
      const { email_or_staff_no, new_password } = _payload;
      yield postPwdReset({ email_or_staff_no, new_password });

      toast.success('Password set!');
      toast.info('Proceed to login!');
      this.userType = EnumUserType.OLD_USER;
      cb?.();
    } catch (error) {
      this.errors.reset = parseError(error);
    } finally {
      this.isLoading.reset = false;
    }
  }
}

export default AuthStore;
