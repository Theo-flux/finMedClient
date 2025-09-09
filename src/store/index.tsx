'use client';
import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import AppConfigStore from './AppConfig';
import AuthStore from './AuthStore';
import UserStore from './UserStore';
import BudgetStore from './BudgetStore';
import ExpenseStore from './ExpenseStore';
import InvoiceStore from './InvoiceStore';
import PaymentStore from './PaymentStore';
import PatientStore from './PatientStore';

configure({
  enforceActions: 'observed',
  // observableRequiresReaction: true,
  // reactionRequiresObservable: true,
  computedRequiresReaction: true
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export class RootStore {
  // more Features store added here...
  AppConfigStore: AppConfigStore;
  AuthStore: AuthStore;
  UserStore: UserStore;
  BudgetStore: BudgetStore;
  ExpenseStore: ExpenseStore;
  InvoiceStore: InvoiceStore;
  PaymentStore: PaymentStore;
  PatientStore: PatientStore;

  constructor() {
    this.AppConfigStore = new AppConfigStore(this);
    this.AuthStore = new AuthStore(this);
    this.UserStore = new UserStore(this);
    this.BudgetStore = new BudgetStore(this);
    this.ExpenseStore = new ExpenseStore(this);
    this.InvoiceStore = new InvoiceStore(this);
    this.PaymentStore = new PaymentStore(this);
    this.PatientStore = new PatientStore(this);
  }
}

/**
 * ### Root Store Instance
 * This is the root store instance.
 * It is used to access all the stores.
 * and can be used to access the store properties outside of the component.
 */
export const Stores = new RootStore();

const StoreContext = createContext<RootStore>(Stores);

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <StoreContext.Provider value={Stores}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);

// export default StoreProvider;
