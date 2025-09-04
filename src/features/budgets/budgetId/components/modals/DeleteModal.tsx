import { DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteExpense } from '@/requests/expense';
import { BUDGET } from '@/constants/api';
import { parseError } from '@/utils/errorHandler';
import { useStyledToast } from '@/hooks/app/useStyledToast';

export default function DeletModal() {
  const toast = useStyledToast();
  const {
    AppConfigStore: { toggleModals, isOpen, dataModal }
  } = useStore();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteExpense,
    onError: (error) => {
      toast.error(parseError(error) || 'Error delete Expense!');
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] == BUDGET.CREATE
      });
      toast.success(data.data.message || 'Expense deleted successfully!');
      toggleModals({});
    }
  });

  return (
    <XModal isOpen={isOpen.DELETE_EXPENSE_MODAL} closeModal={() => isPending || toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>Ready to Delete?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this data. You won't be able to get it back once
            deleted.
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
            variant="destructive"
            onClick={() => mutate(dataModal.uid)}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </XModal>
  );
}
