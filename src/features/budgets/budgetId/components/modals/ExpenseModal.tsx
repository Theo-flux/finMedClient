import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { DialogContent, DialogTitle, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { observer } from 'mobx-react-lite';
import { Button } from '@/components/ui/button';
import z from 'zod';
import { useEffect, useMemo, useRef } from 'react';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import { parseError } from '@/utils/errorHandler';
import { BUDGET } from '@/constants/api';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';
import InputNumberField from '@/components/fields/NumberInput';
import TextareaField from '@/components/fields/TextareaField';
import { useFetchExpense } from '@/hooks/expenses/useFetchExpense';
import { CategorySelect } from '@/components/fields/CategorySelect';

export const ExpenseSchema = z.object({
  amount_spent: z.number(),
  title: z.string({ required_error: 'Title is required.' }),
  short_description: z.string({ required_error: 'Description is required.' }),
  expenses_category_uid: z.string({ required_error: 'Kindly select a category.' }),
  budget_uid: z.string({ required_error: 'Budget is required.' })
});

export type TExpenseSchema = z.infer<typeof ExpenseSchema>;

const ExpenseModal = () => {
  const budgetData = useRef<Partial<TExpenseSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, dataModal },
    ExpenseStore: { createExpense, updateExpense, isLoading: isExpenseStoreLoading }
  } = useStore();

  const queryClient = useQueryClient();
  const isEditMode = !!dataModal.uid;
  const { data, isLoading } = useFetchExpense(dataModal.uid);

  const defaultValues = useMemo(() => {
    if (isEditMode && !isLoading && data != undefined) {
      return {
        budget_uid: dataModal.budget_uid,
        amount_spent: Number(data.amount_spent),
        title: data.title,
        short_description: data.short_description,
        expenses_category_uid: data.expenses_category_uid
      };
    }

    return {
      budget_uid: dataModal.budget_uid,
      amount_spent: 0,
      title: '',
      short_description: '',
      expenses_category_uid: ''
    };
  }, [isEditMode, isLoading, data]);

  const form = useForm<TExpenseSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(ExpenseSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (original: Partial<TExpenseSchema>, current: TExpenseSchema) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TExpenseSchema;
  };

  const onSubmit = async (formData: TExpenseSchema) => {
    const cbFn = () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === BUDGET.CREATE
      });
      toggleModals({});
    };

    try {
      if (isEditMode) {
        const changedValue = getChangedFields(budgetData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          updateExpense(dataModal.uid, changedValue, cbFn);
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        createExpense(formData, cbFn);
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
        budget_uid: dataModal.budget_uid,
        amount_spent: 0,
        title: '',
        short_description: '',
        expenses_category_uid: ''
      });
      budgetData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.EXPENSE_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle>Expense</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-4">
              <FormField
                name="title"
                render={({ field }) => (
                  <InputField
                    label="Title"
                    id="title"
                    type="text"
                    placeholder="e.g Transport"
                    required
                    {...field}
                  />
                )}
              />

              <FormField
                name="short_description"
                render={({ field }) => (
                  <TextareaField
                    label="Short description"
                    id="shortDescription"
                    placeholder="e.g Bought fuel for the company car"
                    required
                    {...field}
                  />
                )}
              />

              <FormField
                name="amount_spent"
                render={({ field: { onChange, ...rest } }) => (
                  <div>
                    <InputNumberField
                      label="Amount"
                      thousandSeparator=","
                      decimalSeparator="."
                      prefix="₦"
                      placeholder="0.00"
                      required
                      decimalScale={2}
                      allowNegative={false}
                      allowLeadingZeros={false}
                      valueIsNumericString={true}
                      onValueChange={(values) => {
                        onChange(values.floatValue || 0);
                      }}
                      {...rest}
                    />
                  </div>
                )}
              />

              <CategorySelect
                control={form.control}
                name="expenses_category_uid"
                label="category"
                placeholder="Select a category"
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <Button
                type="submit"
                disabled={!isDirty || isExpenseStoreLoading.createExpense}
                isLoading={isExpenseStoreLoading.createExpense}
              >
                {dataModal.uid ? 'Update' : 'Create'} Expense
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
};

export default observer(ExpenseModal);
