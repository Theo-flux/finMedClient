import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { DialogContent, DialogTitle, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { observer } from 'mobx-react-lite';
import { Button } from '@/components/ui/button';
import z from 'zod';
import { useEffect, useMemo, useRef } from 'react';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import { parseError } from '@/utils/errorHandler';
import { BUDGET } from '@/constants/api';
import { Form } from '@/components/ui/form';
import { patchBudgetAssign } from '@/requests/budget';
import StaffSelect from '@/components/fields/StaffSelect';

export const BudgetAssignSchema = z.object({
  assignee_uid: z.string({ required_error: 'Select a staff to assign to this budget.' })
});

export type TBudgetAssignSchema = z.infer<typeof BudgetAssignSchema>;

const BudgetAssignModal = () => {
  const budgetData = useRef<Partial<TBudgetAssignSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, dataModal }
  } = useStore();

  const queryClient = useQueryClient();
  const isEditMode = !!dataModal.uid;

  const defaultValues = useMemo(() => {
    if (isEditMode) {
      return {
        assignee_uid: dataModal.assignee_uid || ''
      };
    }

    return {
      assignee_uid: ''
    };
  }, [isEditMode]);

  const { mutate, isPending } = useMutation({
    mutationFn: patchBudgetAssign,
    onError: (error) => {
      toast.error(parseError(error));
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] == BUDGET.CREATE
      });
      toast.success(data?.data.message ?? 'User assigned to budget!');
      toggleModals({});
    }
  });

  const form = useForm<TBudgetAssignSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(BudgetAssignSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (
    original: Partial<TBudgetAssignSchema>,
    current: TBudgetAssignSchema
  ) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TBudgetAssignSchema;
  };

  const onSubmit = async (formData: TBudgetAssignSchema) => {
    try {
      if (isEditMode) {
        const changedValue = getChangedFields(budgetData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          mutate({ budget_uid: dataModal.budget_uid, payload: changedValue });
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        mutate({ budget_uid: dataModal.budget_uid, payload: formData });
      }
    } catch (error) {
      toast.error(parseError(error));
    }
  };

  useEffect(() => {
    if (isEditMode) {
      reset(defaultValues);
      budgetData.current = defaultValues;
    } else {
      reset({
        assignee_uid: ''
      });
      budgetData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.BUDGET_ASSIGN_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle>Budget</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-4">
              <StaffSelect
                control={form.control}
                name="assignee_uid"
                description="Select the staff member to assign this budget to."
                label="Assign to"
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <Button type="submit" disabled={!isDirty || isPending} isLoading={isPending}>
                {dataModal.uid ? 'Reassign' : 'Assign'} budget
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
};

export default observer(BudgetAssignModal);
