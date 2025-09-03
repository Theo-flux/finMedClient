import { makeObservable, observable, action } from 'mobx';
import { RootStore } from '@/store';
import initializer from '@/utils/initializer';
import { AppModals, TAppModalsAction } from './appModalTypes';

const INIT_IS_OPEN = initializer(AppModals, false);

class AppConfigStore {
  appQueryLimit = 30;
  appQueryOffset = 0;
  isSideNavOpen = false;

  isActivityOpen = false;

  rootStore: RootStore;

  nonce = 0;

  doneModal = {
    text: '',
    subText: '',
    ctaText: '',
    showClose: true
  };

  setPwdModal = {
    email_or_staff_no: ''
  };

  resourceModal = {
    uid: '',
    name: '',
    status: '',
    type: ''
  };

  dataModal = {
    uid: ''
  };

  isOpen = { ...INIT_IS_OPEN };

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      appQueryLimit: observable,
      isSideNavOpen: observable,
      isActivityOpen: observable,
      isOpen: observable,
      nonce: observable,
      doneModal: observable,
      setPwdModal: observable,
      resourceModal: observable,
      dataModal: observable,

      openSideNav: action.bound,
      openActivityNav: action.bound,
      toggleModals: action.bound,
      setModalOpenState: action.bound
    });
    this.rootStore = rootStore;
  }

  openSideNav(open?: boolean) {
    this.isSideNavOpen = typeof open === 'undefined' ? !this.isSideNavOpen : open;
  }

  openActivityNav(open?: boolean) {
    this.isActivityOpen = typeof open === 'undefined' ? !this.isActivityOpen : open;
  }

  setModalOpenState(name: AppModals, open?: boolean) {
    this.isOpen[name] = typeof open === 'undefined' ? !this.isOpen[name] : open;
  }

  /**
   * @param modal optional options to be passed to the modal, use the enum `AppModals` to specify
   * the modal name, if no options are passed, all modals will be closed
   */
  toggleModals(modal: TAppModalsAction = {}) {
    switch (modal.name) {
      case '':
        break;
      case AppModals.DONE:
        if (modal.open) {
          this.doneModal = {
            text: modal.text,
            subText: modal.subText,
            ctaText: modal.ctaText ?? 'Got it',
            showClose: modal.showClose ?? true
          };
        }
        break;
      case AppModals.SET_PWD_MODAL:
        if (modal.open) {
          this.setPwdModal = {
            email_or_staff_no: modal.email_or_staff_no
          };
        }
        break;
      case AppModals.RESOURCE_MODAL:
        if (modal.open) {
          this.resourceModal = {
            uid: modal.uid,
            type: modal.type,
            status: modal.status,
            name: modal.resource_name
          };
        }
        break;

      case AppModals.USER_MODAL:
        if (modal.open) {
          this.dataModal = {
            uid: modal.uid
          };
        }
        break;
      case AppModals.BUDGET_MODAL:
        if (modal.open) {
          this.dataModal = {
            uid: modal.uid
          };
        }
        break;
      default:
        this.isOpen = { ...INIT_IS_OPEN };
        break;
    }
    if (modal.name && AppModals[modal.name] !== undefined) {
      this.setModalOpenState(modal.name, modal.open);
    }

    this.nonce = Date.now() + Math.random();
  }
}

export default AppConfigStore;
