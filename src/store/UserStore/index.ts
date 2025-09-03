import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '..';

class UserStore {
  rootStore: RootStore;
  userQuery: TUserQuery = { limit: 30, offset: 0, user_status: null, staff_no: null, q: null };

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      userQuery: observable,

      setLimit: action.bound,
      setOffset: action.bound
    });
    this.rootStore = _rootStore;
  }

  setLimit(limit: number) {
    this.userQuery.limit = limit;
  }

  setOffset(offset: number) {
    this.userQuery.offset = offset;
  }
}

export default UserStore;
