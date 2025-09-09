import { action, flow, makeObservable, observable } from 'mobx';
import { RootStore } from '..';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/constants/api';
import initializer from '@/utils/initializer';
import { parseError } from '@/utils/errorHandler';
import { toast } from '@/constants/toast';
import { patchPatient, postCreatePatient } from '@/requests/patients';
import { TPatientSchema } from '@/features/patients/components/modal/PatientModal';

const INIT_IS_LOADING = {
  createPatient: false
};

class PatientStore {
  rootStore: RootStore;
  queries: TPatientQuery = {
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    patient_type: null,
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

      createPatient: flow.bound,
      updatePatient: flow.bound
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

  *createPatient(_payload: Partial<TPatientSchema>, cb?: () => void) {
    this.isLoading.createPatient = true;
    this.errors.createPatient = '';

    try {
      yield postCreatePatient(_payload);
      toast.success('Patient Created');
      cb?.();
    } catch (error) {
      this.errors.createPatient = parseError(error);
      toast.error(this.errors.createPatient);
    } finally {
      this.isLoading.createPatient = false;
    }
  }

  *updatePatient(uid: string, _payload: Partial<TPatientSchema>, cb?: () => void) {
    this.isLoading.createPatient = true;
    this.errors.createPatient = '';

    try {
      yield patchPatient({ uid, payload: _payload });
      toast.success('Patient Updated');
      cb?.();
    } catch (error) {
      this.errors.createPatient = parseError(error);
      toast.error(this.errors.createPatient);
    } finally {
      this.isLoading.createPatient = false;
    }
  }
}

export default PatientStore;
