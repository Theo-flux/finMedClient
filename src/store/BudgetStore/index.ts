import { action, flow, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants/api';
import { TBudgetSchema } from '@/features/budgets/components/modals/BudgetModal';
import initializer from '@/utils/initializer';
import { patchBudget, postCreateBudget } from '@/requests/budget';
import { parseError } from '@/utils/errorHandler';
import { toast } from '@/constants/toast';

const INIT_IS_LOADING = {
  createBudget: false
};

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
  selectedBudgetStatus: Record<EnumLabBudgetQueryType, Set<string>> = {
    [EnumLabBudgetQueryType.SELF]: new Set(),
    [EnumLabBudgetQueryType.ASSIGNED]: new Set()
  };
  selectedBudgetAvailability: Record<EnumLabBudgetQueryType, Set<string>> = {
    [EnumLabBudgetQueryType.SELF]: new Set(),
    [EnumLabBudgetQueryType.ASSIGNED]: new Set()
  };

  isLoading = { ...INIT_IS_LOADING };
  errors = initializer(this.isLoading, '');

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      queries: observable,
      isLoading: observable,
      errors: observable,
      selectedBudgetAvailability: observable,
      selectedBudgetStatus: observable,

      setBudgetStatusFilter: action.bound,
      setBudgetAvailabilityFilter: action.bound,
      resetFilters: action.bound,
      setQSearch: action.bound,
      setLimit: action.bound,
      setOffset: action.bound,

      createBudget: flow.bound,
      updateBudget: flow.bound
    });

    this.rootStore = _rootStore;
  }

  setBudgetStatusFilter(
    _status: string[] | null,
    dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF
  ) {
    this.selectedBudgetStatus[dataType] = new Set(_status || []);

    const statusArray = Array.from(this.selectedBudgetStatus[dataType]);
    const statusString = statusArray.length > 0 ? statusArray.join(',') : null;

    this.queries[dataType] = {
      ...this.queries[dataType],
      budget_status: statusString
    };
  }

  setBudgetAvailabilityFilter(
    _availability: string[] | null,
    dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF
  ) {
    this.selectedBudgetAvailability[dataType] = new Set(_availability || []);

    const availbilityArray = Array.from(this.selectedBudgetAvailability[dataType]);
    const availabilityString = availbilityArray.length > 0 ? availbilityArray.join(',') : null;

    this.queries[dataType] = {
      ...this.queries[dataType],
      budget_availability: availabilityString
    };
  }

  resetFilters(dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF) {
    this.selectedBudgetStatus[dataType].clear();
    this.selectedBudgetAvailability[dataType].clear();
    this.queries[dataType] = { ...defaultQuery };
  }

  setQSearch(_q: string, dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF) {
    this.queries[dataType].q = _q;
  }

  setOffset(_offset: number, dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF) {
    this.queries[dataType].offset = _offset;
  }

  setLimit(_limit: number, dataType: EnumLabBudgetQueryType = EnumLabBudgetQueryType.SELF) {
    this.queries[dataType].limit = _limit;
  }

  *createBudget(_payload: TBudgetSchema, cb?: () => void) {
    this.isLoading.createBudget = true;
    this.errors.createBudget = '';

    try {
      yield postCreateBudget(_payload);
      toast.success('Budget Created');
      cb?.();
    } catch (error) {
      this.errors.createBudget = parseError(error);
      toast.error(this.errors.createBudget);
    } finally {
      this.isLoading.createBudget = false;
    }
  }

  *updateBudget(uid: string, _payload: Partial<TBudgetSchema>, cb?: () => void) {
    this.isLoading.createBudget = true;
    this.errors.createBudget = '';

    try {
      yield patchBudget({ uid, payload: _payload });
      toast.success('Budget Updated');
      cb?.();
    } catch (error) {
      this.errors.createBudget = parseError(error);
      toast.error(this.errors.createBudget);
    } finally {
      this.isLoading.createBudget = false;
    }
  }
}

export default BudgetStore;
