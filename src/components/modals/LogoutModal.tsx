import { DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { DialogHeader, DialogFooter } from '../ui/dialog';
import { XModal } from '.';
import { useStore } from '@/store';

export default function LogoutModal() {
  const {
    AppConfigStore: { toggleModals, isOpen },
    AuthStore: { logout, isLoading }
  } = useStore();
  return (
    <XModal isOpen={isOpen.LOG_OUT_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>Ready to Log Out?</DialogTitle>
          <DialogDescription>No worries, we can get you back in easily.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild disabled={isLoading.logout}>
            <Button type="button" variant="secondary">
              close
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            onClick={() => logout()}
            disabled={isLoading.logout}
            isLoading={isLoading.logout}
          >
            log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </XModal>
  );
}
