import { DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchBudgetStatus } from '@/requests/budget';
import { BUDGET } from '@/constants/api';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { EnumBudgetStatus } from '@/constants/mangle';

export default function BudgetStatusModal() {
  const toast = useStyledToast();
  const {
    AppConfigStore: { toggleModals, isOpen, dataModal }
  } = useStore();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: patchBudgetStatus,
    onError: () => {
      toast.error('Error updating Budget!');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] == BUDGET.CREATE
      });
      toast.success('Budget status updated!');
      toggleModals({});
    }
  });

  return (
    <XModal isOpen={isOpen.BUDGET_STATUS_MODAL} closeModal={() => isPending || toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>
            Ready to{' '}
            {dataModal.budget_status === EnumBudgetStatus.APPROVED
              ? 'Approve Budget'
              : 'Reject Budget'}
            ?
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to{' '}
            {dataModal.budget_status === EnumBudgetStatus.APPROVED ? 'approve' : 'reject'} this
            budget? This action will{' '}
            {dataModal.budget_status === EnumBudgetStatus.PENDING ? 'confirm' : 'deny'} the budget
            proposal.
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
              dataModal.budget_status === EnumBudgetStatus.APPROVED ? 'default' : 'destructive'
            }
            onClick={() => mutate({ uid: dataModal.uid, budget_status: dataModal.budget_status })}
          >
            {dataModal.budget_status === EnumBudgetStatus.APPROVED
              ? 'Approve Budget'
              : 'Reject Budget'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </XModal>
  );
}
