import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';

const BudgetModal = () => {
  const {
    AppConfigStore: { toggleModals, isOpen }
  } = useStore();

  return (
    <XModal isOpen={isOpen.BUDGET_MODAL} closeModal={() => toggleModals({})}>
      Budget Modal
    </XModal>
  );
};

export default observer(BudgetModal);
