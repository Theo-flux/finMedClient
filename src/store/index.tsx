'use client';
import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import AppConfigStore from './AppConfig';

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

  constructor() {
    this.AppConfigStore = new AppConfigStore(this);
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
