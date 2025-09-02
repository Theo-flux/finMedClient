import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '..';

class StaffStore {
  rootStore: RootStore;
  staffQuery = { Limit: 10, Page: 1 };

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      staffQuery: observable,

      setLimit: action.bound,
      setPage: action.bound
    });
    this.rootStore = _rootStore;
  }

  setLimit(limit: number) {
    this.staffQuery.Limit = limit;
  }

  setPage(page: number) {
    this.staffQuery.Page = page;
  }
}

export default StaffStore;
