import { action, flow, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants/api';
import initializer from '@/utils/initializer';
import { parseError } from '@/utils/errorHandler';
import { toast } from '@/constants/toast';
import { patchInvoice, postCreateInvoice } from '@/requests/invoices';
import { TInvoiceSchema } from '@/features/invoice/components/modals/InvoiceModal';

const INIT_IS_LOADING = {
  createInvoice: false
};

export enum EnumLabBudgetQueryType {
  SELF = 'self',
  ASSIGNED = 'assigned'
}

class InvoiceStore {
  rootStore: RootStore;
  queries: TInvoiceQuery = {
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    invoice_status: null,
    q: null
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

      createInvoice: flow.bound,
      updateInvoice: flow.bound
    });
    this.rootStore = _rootStore;
  }

  setQSearch(_q: string) {
    this.queries.q = _q;
  }

  setOffset(_offset: number) {
    this.queries.offset = _offset;
  }

  setLimit(_limit: number) {
    this.queries.limit = _limit;
  }

  *createInvoice(_payload: Partial<TInvoiceSchema>, cb?: () => void) {
    this.isLoading.createInvoice = true;
    this.errors.createInvoice = '';

    try {
      yield postCreateInvoice(_payload);
      toast.success('Invoice Created');
      cb?.();
    } catch (error) {
      this.errors.createInvoice = parseError(error);
      toast.error(this.errors.createInvoice);
    } finally {
      this.isLoading.createInvoice = false;
    }
  }

  *updateInvoice(uid: string, _payload: Partial<TInvoiceSchema>, cb?: () => void) {
    this.isLoading.createInvoice = true;
    this.errors.createInvoice = '';

    try {
      yield patchInvoice({ uid, payload: _payload });
      toast.success('Invoice Updated');
      cb?.();
    } catch (error) {
      this.errors.createInvoice = parseError(error);
      toast.error(this.errors.createInvoice);
    } finally {
      this.isLoading.createInvoice = false;
    }
  }
}

export default InvoiceStore;
