import { DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchBudgetUnassign } from '@/requests/budget';
import { BUDGET } from '@/constants/api';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { parseError } from '@/utils/errorHandler';

export default function BudgetUnAssignModal() {
  const toast = useStyledToast();
  const {
    AppConfigStore: { toggleModals, isOpen, dataModal }
  } = useStore();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: patchBudgetUnassign,
    onError: (error) => {
      toast.error(parseError(error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] == BUDGET.CREATE
      });
      toast.success('User removed from the budget!');
      toggleModals({});
    }
  });

  return (
    <XModal isOpen={isOpen.BUDGET_UNASSIGN_MODAL} closeModal={() => isPending || toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>Ready to unassign this budget?</DialogTitle>
          <DialogDescription>
            Are you sure you want to unassign this budget? Don't worry, you can always reassign it
            later.
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
            variant={'destructive'}
            onClick={() => mutate(dataModal.budget_uid!)}
          >
            Unassign Budget
          </Button>
        </DialogFooter>
      </DialogContent>
    </XModal>
  );
}
