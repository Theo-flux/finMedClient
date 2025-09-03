'use client';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { observer } from 'mobx-react-lite';
import { lazy, useMemo } from 'react';

const ModalsMap = {
  [AppModals.DONE]: lazy(() => import('@/components/modals/DoneModal')),
  [AppModals.LOG_OUT_MODAL]: lazy(() => import('@/components/modals/LogoutModal')),
  [AppModals.SET_PWD_MODAL]: lazy(() => import('@/features/auth/modals/set-pwd-modal')),
  [AppModals.RESOURCE_MODAL]: lazy(
    () => import('@/features/settings/misc/components/modals/ResourceModal')
  ),
  [AppModals.USER_MODAL]: lazy(() => import('@/features/staff/components/modals/CreateStaff')),
  [AppModals.BUDGET_MODAL]: lazy(() => import('@/features/budgets/components/modals/BudgetModal'))
};

const ModalsBank = () => {
  const {
    AppConfigStore: { isOpen, nonce }
  } = useStore();

  const OpenedModalsComponent = useMemo(() => {
    return Object.entries(ModalsMap).reduce(
      (acc: { Render: React.ReactNode; name: string }[], [keyName, Component]) => {
        if (isOpen[keyName as keyof typeof AppModals]) {
          acc.push({ Render: <Component key={keyName} />, name: keyName });
        }
        return acc;
      },
      []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, nonce]);

  return <>{OpenedModalsComponent.map((Modal) => Modal.Render)}</>;
};

export default observer(ModalsBank);
