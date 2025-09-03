'use client';
import { useEffect, useMemo, useRef } from 'react';
import { DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/fields/InputField';
import { DepartmentSelect } from '@/components/fields/DepartmentSelect';
import { RoleSelect } from '@/components/fields/RoleSelect';
import { useQueryClient } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import { USER } from '@/constants/api';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { parseError } from '@/utils/errorHandler';
import _ from 'lodash';
import { Form, FormField } from '@/components/ui/form';
import { email } from '@/types/validation';
import { useFetchUser } from '@/hooks/users/useFetchUser';

export const UserSchema = z.object({
  first_name: z.string().min(1, 'Name is required'),
  last_name: z.string().min(1, 'Name is required'),
  email,
  role_uid: z.object({
    label: z.string(),
    value: z.string().min(1, 'Kindly assign a role to this user.'),
    disable: z.boolean().optional()
  }),
  department_uid: z.object({
    label: z.string(),
    value: z.string().min(1, 'Kindly place user in a Department.'),
    disable: z.boolean().optional()
  })
});

export type TUserSchema = z.infer<typeof UserSchema>;

function UserModal() {
  const userData = useRef<Partial<TUserSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, userModal },
    AuthStore: { createUser, updateUser, isLoading: isAuthStoreLoading }
  } = useStore();

  const queryClient = useQueryClient();

  const isEditMode = !!userModal.uid;

  const { data, isLoading } = useFetchUser(userModal.uid);

  const defaultValues = useMemo(() => {
    if (isEditMode && !isLoading && data != undefined) {
      return {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        role_uid: {
          label: data.role.name,
          value: data.role.uid,
          disable: false
        },
        department_uid: {
          label: data.department.name,
          value: data.department.uid,
          disable: false
        }
      };
    }

    return {
      first_name: '',
      last_name: '',
      email: '',
      role_uid: { label: '', value: '', disable: false },
      department_uid: { label: '', value: '', disable: false }
    };
  }, [isEditMode, isLoading, data]);

  const form = useForm<TUserSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(UserSchema),
    reValidateMode: 'onChange'
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (original: Partial<TUserSchema>, current: TUserSchema) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TUserSchema;
  };

  const onSubmit = async (formData: TUserSchema) => {
    const cbFn = () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === USER.ALL
      });
      toggleModals({});
    };

    try {
      if (isEditMode) {
        const changedValue = getChangedFields(userData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          updateUser(userModal.uid, changedValue, cbFn);
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        createUser(formData, cbFn);
      }
    } catch (error) {
      toast.error(parseError(error));
    }
  };

  useEffect(() => {
    if (isEditMode) {
      reset(defaultValues);
      userData.current = defaultValues;
    } else {
      reset({
        first_name: '',
        last_name: '',
        email: '',
        role_uid: { label: '', value: '', disable: false },
        department_uid: { label: '', value: '', disable: false }
      });
      userData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  const handleRoleChange = (role: TResource | null) => {
    console.log('Selected role:', role);
  };

  const handleDepartmentChange = (department: TResource | null) => {
    console.log('Selected department:', department);
  };

  return (
    <XModal isOpen={isOpen.USER_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>{isEditMode ? 'Edit' : 'Add'} user</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-6">
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

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="theo.phil@srh.com"
                    required
                    {...field}
                  />
                )}
              />

              <RoleSelect
                control={form.control}
                name="role_uid"
                label="Role"
                placeholder="Select a role"
                required
                onSelectionChange={handleRoleChange}
              />

              <DepartmentSelect
                control={form.control}
                name="department_uid"
                label="Department"
                placeholder="Select a department"
                required
                onSelectionChange={handleDepartmentChange}
              />
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <DialogClose asChild disabled={isAuthStoreLoading.createUser}>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={!isDirty || isAuthStoreLoading.createUser}
                isLoading={isAuthStoreLoading.createUser}
              >
                {isEditMode ? 'Update' : 'Add'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
}

export default observer(UserModal);
