import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { DialogContent, DialogTitle, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { observer } from 'mobx-react-lite';
import { Button } from '@/components/ui/button';
import z from 'zod';
import { useEffect, useMemo, useRef } from 'react';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { useQueryClient } from '@tanstack/react-query';
import { useFetchBudget } from '@/hooks/budgets/useFetchBudget';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import { parseError } from '@/utils/errorHandler';
import { BUDGET } from '@/constants/api';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';
import InputNumberField from '@/components/fields/NumberInput';
import { DepartmentSelect } from '@/components/fields/DepartmentSelect';
import TextareaField from '@/components/fields/TextareaField';

export const BudgetSchema = z.object({
  gross_amount: z
    .number()
    .refine((val) => val > 999, { message: "You can't budget less than ₦1000" }),
  title: z.string({ required_error: 'Budget title is required.' }),
  short_description: z.string({ required_error: 'Budget description is required.' }),
  department_uid: z.string({ required_error: 'Kindly place user in a Department.' })
});

export type TBudgetSchema = z.infer<typeof BudgetSchema>;

const BudgetModal = () => {
  const budgetData = useRef<Partial<TBudgetSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, dataModal },
    AuthStore: { user },
    BudgetStore: { createBudget, updateBudget, isLoading: isBudgetStoreLoading }
  } = useStore();

  const queryClient = useQueryClient();
  const isEditMode = !!dataModal.uid;
  const { data, isLoading } = useFetchBudget(dataModal.uid);

  const defaultValues = useMemo(() => {
    if (isEditMode && !isLoading && data != undefined) {
      return {
        gross_amount: Number(data.gross_amount),
        title: data.title,
        short_description: data.short_description,
        department_uid: data.department.uid
      };
    }

    return {
      gross_amount: 0,
      title: '',
      short_description: '',
      department_uid: user?.department?.uid ?? ''
    };
  }, [isEditMode, isLoading, data]);

  const form = useForm<TBudgetSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(BudgetSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (original: Partial<TBudgetSchema>, current: TBudgetSchema) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TBudgetSchema;
  };

  const onSubmit = async (formData: TBudgetSchema) => {
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
          updateBudget(dataModal.uid, changedValue, cbFn);
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        createBudget(formData, cbFn);
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
        gross_amount: 0,
        title: '',
        short_description: '',
        department_uid: user?.department?.uid ?? ''
      });
      budgetData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.BUDGET_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle>Budget</DialogTitle>
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
                    placeholder="Q4 budget for 2025."
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
                    placeholder=""
                    required
                    {...field}
                  />
                )}
              />

              <FormField
                name="gross_amount"
                render={({ field: { onChange, ...rest } }) => (
                  <div>
                    <InputNumberField
                      label="Amount"
                      thousandSeparator=","
                      decimalSeparator="."
                      prefix="₦"
                      placeholder="₦10,000.00"
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

              <DepartmentSelect
                control={form.control}
                name="department_uid"
                label="Department"
                placeholder="Select a department"
                description="Your department is used by default."
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <Button
                type="submit"
                disabled={!isDirty || isBudgetStoreLoading.createBudget}
                isLoading={isBudgetStoreLoading.createBudget}
              >
                Create budget
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
};

export default observer(BudgetModal);
