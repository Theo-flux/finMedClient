import { action, flow, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import initializer from '@/utils/initializer';
import { TExpenseSchema } from '@/features/budgets/budgetId/components/modals/ExpenseModal';
import { patchExpense, postCreateExpense } from '@/requests/expense';
import { parseError } from '@/utils/errorHandler';
import { toast } from '@/constants/toast';

const INIT_IS_LOADING = {
  createExpense: false
};

class ExpenseStore {
  rootStore: RootStore;
  expenseQuery: TExpensesQuery = { limit: 30, offset: 0, expenses_category_uid: null, q: null };
  isLoading = { ...INIT_IS_LOADING };
  errors = initializer(this.isLoading, '');

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      expenseQuery: observable,
      isLoading: observable,
      errors: observable,

      setQSearch: action.bound,
      setLimit: action.bound,
      setOffset: action.bound,

      createExpense: flow.bound,
      updateExpense: flow.bound
    });
    this.rootStore = _rootStore;
  }

  setQSearch(_q: string) {
    this.expenseQuery.q = _q;
  }

  setLimit(limit: number) {
    this.expenseQuery.limit = limit;
  }

  setOffset(offset: number) {
    this.expenseQuery.offset = offset;
  }

  *createExpense(_payload: TExpenseSchema, cb?: () => void) {
    this.isLoading.createExpense = true;
    this.errors.createExpense = '';

    try {
      yield postCreateExpense(_payload);
      toast.success('Expense Created');
      cb?.();
    } catch (error) {
      this.errors.createExpense = parseError(error);
      toast.error(this.errors.createExpense);
    } finally {
      this.isLoading.createExpense = false;
    }
  }

  *updateExpense(uid: string, _payload: Partial<TExpenseSchema>, cb?: () => void) {
    this.isLoading.createExpense = true;
    this.errors.createExpense = '';

    try {
      yield patchExpense({ uid, payload: _payload });
      toast.success('Expense Updated');
      cb?.();
    } catch (error) {
      this.errors.createExpense = parseError(error);
      toast.error(this.errors.createExpense);
    } finally {
      this.isLoading.createExpense = false;
    }
  }
}

export default ExpenseStore;
