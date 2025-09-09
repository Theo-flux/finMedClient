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
import { parseError } from '@/utils/errorHandler';
import { INVOICE } from '@/constants/api';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';
import InputNumberField from '@/components/fields/NumberInput';
import { DepartmentSelect } from '@/components/fields/DepartmentSelect';
import { EnumInvoiceType, EnumRoles } from '@/constants/mangle';
import { useFetchSingleInvoice } from '@/hooks/invoices/useFetchSingleInvoice';
import { ServiceSelect } from '@/components/fields/ServiceSelect';
import InputSelect from '@/components/fields/InputSelect';
import { trnformToOptions } from '@/utils';
import _ from 'lodash';

export const InvoiceSchema = z
  .object({
    gross_amount: z
      .number()
      .refine((val) => val > 499, { message: "You can't invoice less than ₦500" }),
    title: z.string({ required_error: 'Invoice title is required.' }),
    tax_percent: z.number().optional(),
    discount_percent: z.number().optional(),
    invoice_type: z.string({ required_error: 'Invoice type is required.' }),
    department_uid: z.string().optional(),
    service_uid: z.string().optional(),
    patient_uid: z.string().optional()
  })
  .superRefine((data, ctx) => {
    if (data.invoice_type === EnumInvoiceType.PATIENT && !data.patient_uid) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Patient is required for patient invoices.',
        path: ['patient_uid']
      });
    }

    if (data.invoice_type === EnumInvoiceType.SERVICE && !data.service_uid) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Service is required for service invoices.',
        path: ['service_uid']
      });
    }
  });

export type TInvoiceSchema = z.infer<typeof InvoiceSchema>;

const InvoiceModal = () => {
  const invoiceData = useRef<Partial<TInvoiceSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, dataModal },
    AuthStore: { user },
    InvoiceStore: { createInvoice, updateInvoice, isLoading: isInvoiceStoreLoading }
  } = useStore();

  const queryClient = useQueryClient();
  const isEditMode = !!dataModal.uid;
  const { data, isLoading } = useFetchSingleInvoice(dataModal.uid);

  const defaultValues = useMemo(() => {
    if (isEditMode && !isLoading && data != undefined) {
      return {
        gross_amount: Number(data.gross_amount),
        title: data.title,
        tax_percent: Number(data.tax_percent),
        discount_percent: Number(data.discount_percent),
        invoice_type: data.invoice_type,
        service_uid: data.service?.uid || '',
        patient_uid: data.patient?.uid || '',
        department_uid: data.department?.uid || ''
      };
    }

    return {
      gross_amount: 0,
      title: '',
      tax_percent: 0,
      discount_percent: 0,
      invoice_type: dataModal.patient_uid ? EnumInvoiceType.PATIENT : '',
      service_uid: '',
      patient_uid: dataModal.patient_uid,
      department_uid: ''
    };
  }, [isEditMode, isLoading, data]);

  const form = useForm<TInvoiceSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(InvoiceSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (original: Partial<TInvoiceSchema>, current: TInvoiceSchema) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TInvoiceSchema;
  };

  const onSubmit = async (formData: TInvoiceSchema) => {
    const cbFn = () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === INVOICE.CREATE
      });
      toggleModals({});
    };

    try {
      if (isEditMode) {
        const changedValue = getChangedFields(invoiceData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          updateInvoice(dataModal.uid, changedValue, cbFn);
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        const data = _.pickBy(formData, (value) => value);
        createInvoice(data, cbFn);
      }
    } catch (error) {
      toast.error(parseError(error));
    }
  };

  useEffect(() => {
    if (isEditMode) {
      reset(defaultValues);
      invoiceData.current = defaultValues;
    } else {
      reset({
        gross_amount: 0,
        title: '',
        tax_percent: 0,
        discount_percent: 0,
        invoice_type: dataModal.patient_uid ? EnumInvoiceType.PATIENT : '',
        service_uid: '',
        patient_uid: dataModal.patient_uid,
        department_uid: user?.department?.uid ?? ''
      });
      invoiceData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.INVOICE_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle>Invoice</DialogTitle>
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
                    placeholder="Consultation fee"
                    required
                    {...field}
                  />
                )}
              />

              <FormField
                name="invoice_type"
                render={({ field }) => (
                  <InputSelect
                    {...field}
                    label="Invoice type"
                    items={trnformToOptions(Object.values(EnumInvoiceType))}
                    placeholder="Select invoice type..."
                    defaultValue={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    required
                    disabled={Boolean(dataModal.patient_uid)}
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

              <div className="flex w-full items-center justify-between space-x-2">
                <FormField
                  name="tax_percent"
                  render={({ field: { onChange, ...rest } }) => (
                    <div className="w-full md:w-1/2">
                      <InputNumberField
                        label="Tax"
                        thousandSeparator=","
                        decimalSeparator="."
                        suffix="%"
                        placeholder="5.0"
                        decimalScale={1}
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
                  name="discount_percent"
                  render={({ field: { onChange, ...rest } }) => (
                    <div className="w-full md:w-1/2">
                      <InputNumberField
                        label="Discount"
                        thousandSeparator=","
                        decimalSeparator="."
                        suffix="%"
                        placeholder="2.0"
                        decimalScale={1}
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
              </div>

              <ServiceSelect
                control={form.control}
                name="service_uid"
                placeholder="Select a service"
              />

              <DepartmentSelect
                control={form.control}
                name="department_uid"
                label="Department"
                placeholder="Select a department"
                disabled={user?.role?.name !== EnumRoles.ADMIN}
                description="Your department is used by default."
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <Button
                type="submit"
                disabled={!isDirty || isInvoiceStoreLoading.createInvoice}
                isLoading={isInvoiceStoreLoading.createInvoice}
              >
                {dataModal.uid ? 'Update' : 'Create'} invoice
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
};

export default observer(InvoiceModal);
