import { XModal } from '@/components/modals';
import { DialogContent } from '@/components/ui/dialog';
import { useStore } from '@/store';
import { SetPwdForm } from '../forgot-password';

export default function LogoutModal() {
  const {
    AppConfigStore: { toggleModals, isOpen }
  } = useStore();
  return (
    <XModal isOpen={isOpen.SET_PWD_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <SetPwdForm />
      </DialogContent>
    </XModal>
  );
}
