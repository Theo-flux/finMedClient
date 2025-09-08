import { action, flow, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import initializer from '@/utils/initializer';
import { parseError } from '@/utils/errorHandler';
import { toast } from '@/constants/toast';
import { patchPayment, postCreatePayment } from '@/requests/payment';
import { TPaymentSchema } from '@/features/invoice/invoiceId/components/modals/PaymentModal';

const INIT_IS_LOADING = {
  createPayment: false
};

class PaymanetStore {
  rootStore: RootStore;
  paymanetQuery: TPaymentQuery = {
    limit: 30,
    offset: 0,
    payment_method: null,
    reference_number: null,
    q: null
  };
  isLoading = { ...INIT_IS_LOADING };
  errors = initializer(this.isLoading, '');

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      paymanetQuery: observable,
      isLoading: observable,
      errors: observable,

      setQSearch: action.bound,
      setLimit: action.bound,
      setOffset: action.bound,

      createPayment: flow.bound,
      updatePayment: flow.bound
    });
    this.rootStore = _rootStore;
  }

  setQSearch(_q: string) {
    this.paymanetQuery.q = _q;
  }

  setLimit(limit: number) {
    this.paymanetQuery.limit = limit;
  }

  setOffset(offset: number) {
    this.paymanetQuery.offset = offset;
  }

  *createPayment(_payload: TPaymentSchema, cb?: () => void) {
    this.isLoading.createPayment = true;
    this.errors.createPayment = '';

    try {
      yield postCreatePayment(_payload);
      toast.success('Payment Created');
      cb?.();
    } catch (error) {
      this.errors.createPayment = parseError(error);
      toast.error(this.errors.createPayment);
    } finally {
      this.isLoading.createPayment = false;
    }
  }

  *updatePayment(uid: string, _payload: Partial<TPaymentSchema>, cb?: () => void) {
    this.isLoading.createPayment = true;
    this.errors.createPayment = '';

    try {
      yield patchPayment({ uid, payload: _payload });
      toast.success('Payment Updated');
      cb?.();
    } catch (error) {
      this.errors.createPayment = parseError(error);
      toast.error(this.errors.createPayment);
    } finally {
      this.isLoading.createPayment = false;
    }
  }
}

export default PaymanetStore;
