import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants/api';

class UserStore {
  rootStore: RootStore;
  userQuery: TUserQuery = {
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    user_status: null,
    staff_no: null,
    q: null
  };

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      userQuery: observable,

      setQSearch: action.bound,
      setLimit: action.bound,
      setOffset: action.bound
    });
    this.rootStore = _rootStore;
  }

  setQSearch(_q: string) {
    this.userQuery.q = _q;
  }

  setLimit(limit: number) {
    this.userQuery.limit = limit;
  }

  setOffset(offset: number) {
    this.userQuery.offset = offset;
  }
}

export default UserStore;
