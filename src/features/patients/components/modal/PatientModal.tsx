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
import { PATIENT } from '@/constants/api';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';
import { useFetchPatient } from '@/hooks/patients/useFetchPatient';
import InputSelect from '@/components/fields/InputSelect';
import { trnformToOptions } from '@/utils';
import { EnumGender, EnumPatientType } from '@/constants/mangle';
import { PhoneInput } from '@/components/fields/PhoneInput';

export const PatientSchema = z.object({
  first_name: z.string({ required_error: 'First name is required.' }),
  last_name: z.string({ required_error: 'First name is required.' }),
  other_name: z.string().optional(),
  gender: z.string({ required_error: 'Gender is required.' }),
  phone_number: z.string({ required_error: 'Phone number is required.' }),
  hospital_id: z.string({ required_error: 'Hospital ID is required.' }),
  patient_type: z.string({ required_error: 'Select a patient type.' })
});

export type TPatientSchema = z.infer<typeof PatientSchema>;

const PatientModal = () => {
  const patientData = useRef<Partial<TPatientSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, dataModal },
    PatientStore: { createPatient, updatePatient, isLoading: isPatientStoreLoading }
  } = useStore();

  const queryClient = useQueryClient();
  const isEditMode = !!dataModal.uid;
  const { data, isLoading } = useFetchPatient(dataModal.uid);

  const defaultValues = useMemo(() => {
    if (isEditMode && !isLoading && data != undefined) {
      return {
        first_name: data.first_name,
        last_name: data.last_name,
        other_name: data.other_name ?? '',
        gender: data.gender,
        phone_number: data.phone_number,
        hospital_id: data.hospital_id,
        patient_type: data.patient_type
      };
    }

    return {
      first_name: '',
      last_name: '',
      other_name: '',
      gender: '',
      phone_number: '',
      hospital_id: '',
      patient_type: ''
    };
  }, [isEditMode, isLoading, data]);

  const form = useForm<TPatientSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(PatientSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (original: Partial<TPatientSchema>, current: TPatientSchema) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TPatientSchema;
  };

  const onSubmit = async (formData: TPatientSchema) => {
    const cbFn = () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === PATIENT.CREATE
      });
      toggleModals({});
    };

    try {
      if (isEditMode) {
        const changedValue = getChangedFields(patientData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          updatePatient(dataModal.uid, changedValue, cbFn);
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        createPatient(formData, cbFn);
      }
    } catch (error) {
      toast.error(parseError(error));
    }
  };

  useEffect(() => {
    if (isEditMode) {
      reset(defaultValues);
      patientData.current = defaultValues;
    } else {
      reset({
        first_name: '',
        last_name: '',
        other_name: '',
        gender: '',
        phone_number: '',
        hospital_id: '',
        patient_type: ''
      });
      patientData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.PATIENT_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle>Patient info</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-4">
              <div className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <InputField
                      label="First Name"
                      id="fName"
                      type="text"
                      placeholder="Theo"
                      required
                      {...field}
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <InputField
                      label="Last Name"
                      id="lName"
                      type="text"
                      placeholder="Phil"
                      required
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-2">
                <FormField
                  control={form.control}
                  name="other_name"
                  render={({ field }) => (
                    <InputField
                      label="other Name"
                      id="oName"
                      type="text"
                      placeholder="Theo"
                      required
                      {...field}
                    />
                  )}
                />

                <FormField
                  name="gender"
                  render={({ field }) => (
                    <InputSelect
                      {...field}
                      label="Gender"
                      items={trnformToOptions(Object.values(EnumGender))}
                      placeholder="Select gender..."
                      defaultValue={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      required
                    />
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <PhoneInput id="phoneNumber" type="text" placeholder="" required {...field} />
                )}
              />

              <FormField
                control={form.control}
                name="hospital_id"
                render={({ field }) => (
                  <InputField
                    label="hospital ID"
                    id="hID"
                    type="text"
                    placeholder="SRH18383"
                    required
                    {...field}
                  />
                )}
              />

              <FormField
                name="patient_type"
                render={({ field }) => (
                  <InputSelect
                    {...field}
                    label="Patient type"
                    items={trnformToOptions(Object.values(EnumPatientType))}
                    placeholder="Select patient type..."
                    defaultValue={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    required
                  />
                )}
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <Button
                type="submit"
                disabled={!isDirty || isPatientStoreLoading.createPatient}
                isLoading={isPatientStoreLoading.createPatient}
              >
                {dataModal.uid ? 'Update' : 'Create'} patient
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
};

export default observer(PatientModal);
