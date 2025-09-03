import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants/api';

export enum EnumLabBudgetQueryType {
  SELF = 'self',
  ASSIGNED = 'assigned'
}

const defaultQuery: TBudgetQuery = {
  limit: DEFAULT_LIMIT,
  offset: DEFAULT_OFFSET,
  budget_availability: null,
  budget_status: null,
  q: null
};

class BudgetStore {
  rootStore: RootStore;
  queries: Record<EnumLabBudgetQueryType, Partial<TBudgetQuery>> = {
    [EnumLabBudgetQueryType.SELF]: { ...defaultQuery },
    [EnumLabBudgetQueryType.ASSIGNED]: { ...defaultQuery }
  };

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      queries: observable,

      setLimit: action.bound,
      setOffset: action.bound
    });
    this.rootStore = _rootStore;
  }

  setOffset(_offset: number, dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF) {
    this.queries[dataType].offset = _offset;
  }

  setLimit(_limit: number, dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF) {
    this.queries[dataType].limit = _limit;
  }
}

export default BudgetStore;
