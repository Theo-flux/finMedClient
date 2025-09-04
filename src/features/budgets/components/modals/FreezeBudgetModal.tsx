import { DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchBudgetAvailability } from '@/requests/budget';
import { BUDGET } from '@/constants/api';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { EnumBudgetAvailability } from '@/constants/mangle';

export default function FreezeModal() {
  const toast = useStyledToast();
  const {
    AppConfigStore: { toggleModals, isOpen, dataModal }
  } = useStore();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: patchBudgetAvailability,
    onError: () => {
      toast.error('Error updating Budget!');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] == BUDGET.CREATE
      });
      toast.success('Budget availability updated!');
      toggleModals({});
    }
  });

  return (
    <XModal
      isOpen={isOpen.BUDGET_AVAILABILITY_MODAL}
      closeModal={() => isPending || toggleModals({})}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>
            Ready to{' '}
            {dataModal.availability === EnumBudgetAvailability.FROZEN
              ? 'Freeze Budget'
              : 'Unfreeze Budget'}
            ?
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to{' '}
            {dataModal.availability === EnumBudgetAvailability.FROZEN ? 'freeze' : 'unfreeze'} this
            budget? This action will{' '}
            {dataModal.availability === EnumBudgetAvailability.FROZEN ? 'freeze' : 'unfreeze'} the
            budget proposal.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild disabled={isPending}>
            <Button type="button" variant="secondary">
              close
            </Button>
          </DialogClose>
          <Button
            disabled={isPending}
            isLoading={isPending}
            type="button"
            variant={
              dataModal.availability === EnumBudgetAvailability.FROZEN ? 'destructive' : 'default'
            }
            onClick={() => mutate({ uid: dataModal.uid, availability: dataModal.availability })}
          >
            {dataModal.availability === EnumBudgetAvailability.FROZEN
              ? 'Freeze Budget'
              : 'Unfreeze Budget'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </XModal>
  );
}
