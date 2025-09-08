import { action, flow, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants/api';
import { TBudgetSchema } from '@/features/budgets/components/modals/BudgetModal';
import initializer from '@/utils/initializer';
import { patchBudget, postCreateBudget } from '@/requests/budget';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { parseError } from '@/utils/errorHandler';

// eslint-disable-next-line react-hooks/rules-of-hooks
const toast = useStyledToast();

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
  isLoading = { ...INIT_IS_LOADING };
  errors = initializer(this.isLoading, '');

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      queries: observable,
      isLoading: observable,
      errors: observable,

      setQSearch: action.bound,
      setLimit: action.bound,
      setOffset: action.bound,

      createBudget: flow.bound,
      updateBudget: flow.bound
    });
    this.rootStore = _rootStore;
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
