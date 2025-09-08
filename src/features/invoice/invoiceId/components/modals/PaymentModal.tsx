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
import { INVOICE } from '@/constants/api';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';
import InputNumberField from '@/components/fields/NumberInput';
import TextareaField from '@/components/fields/TextareaField';
import { useFetchPayment } from '@/hooks/payments/useFetchPayment';
import InputSelect from '@/components/fields/InputSelect';
import { trnformToOptions } from '@/utils';
import { EnumPaymentMethod } from '@/constants/mangle';

export const PaymentSchema = z.object({
  amount_received: z.number(),
  note: z.string({ required_error: 'Note is required.' }),
  payment_method: z.string({ required_error: 'Payment method is required.' }),
  reference_number: z.string().optional(),
  invoice_uid: z.string({ required_error: 'Invoice is required.' })
});

export type TPaymentSchema = z.infer<typeof PaymentSchema>;

const PaymentModal = () => {
  const budgetData = useRef<Partial<TPaymentSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, dataModal },
    PaymentStore: { createPayment, updatePayment, isLoading: isPaymentStoreLoading }
  } = useStore();

  const queryClient = useQueryClient();
  const isEditMode = !!dataModal.uid;
  const { data, isLoading } = useFetchPayment(dataModal.uid);

  const defaultValues = useMemo(() => {
    if (isEditMode && !isLoading && data != undefined) {
      return {
        invoice_uid: dataModal.invoice_uid,
        amount_received: Number(data.amount_received),
        note: data.note,
        payment_method: data.payment_method,
        reference_number: data.reference_number
      };
    }

    return {
      invoice_uid: dataModal.invoice_uid,
      amount_received: 0,
      note: '',
      payment_method: '',
      reference_number: ''
    };
  }, [isEditMode, isLoading, data]);

  const form = useForm<TPaymentSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(PaymentSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (original: Partial<TPaymentSchema>, current: TPaymentSchema) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TPaymentSchema;
  };

  const onSubmit = async (formData: TPaymentSchema) => {
    const cbFn = () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === INVOICE.CREATE
      });
      toggleModals({});
    };

    try {
      if (isEditMode) {
        const changedValue = getChangedFields(budgetData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          updatePayment(dataModal.uid, changedValue, cbFn);
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        createPayment(formData, cbFn);
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
        invoice_uid: dataModal.invoice_uid,
        amount_received: 0,
        note: '',
        payment_method: '',
        reference_number: ''
      });
      budgetData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.PAYMENT_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle>Payment</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-4">
              <FormField
                name="amount_received"
                render={({ field: { onChange, ...rest } }) => (
                  <div>
                    <InputNumberField
                      label="Amount Received"
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

              <FormField
                name="payment_method"
                render={({ field }) => (
                  <InputSelect
                    {...field}
                    label="Invoice type"
                    items={trnformToOptions(Object.values(EnumPaymentMethod))}
                    placeholder="Select payment method..."
                    defaultValue={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    required
                  />
                )}
              />

              <FormField
                name="reference_number"
                render={({ field }) => (
                  <InputField
                    label="Reference Number"
                    id="reference_number"
                    type="text"
                    placeholder="e.g TRNX345784938"
                    {...field}
                  />
                )}
              />

              <FormField
                name="note"
                render={({ field }) => (
                  <TextareaField
                    label="Short Note"
                    id="shortNote"
                    placeholder="e.g Payment description"
                    required
                    {...field}
                  />
                )}
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <Button
                type="submit"
                disabled={!isDirty || isPaymentStoreLoading.createPayment}
                isLoading={isPaymentStoreLoading.createPayment}
              >
                {dataModal.uid ? 'Update' : 'Create'} Payment
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
};

export default observer(PaymentModal);
