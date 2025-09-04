'use client';
import { useEffect, useMemo, useRef } from 'react';
import { DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { XModal } from '@/components/modals';
import { useStore } from '@/store';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/fields/InputField';
import { useQueryClient } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import { MISC } from '@/constants/api';
import InputSelect from '@/components/fields/InputSelect';
import { resourceStatusOptions } from '@/constants/data';
import { patchResource, postResource } from '@/requests/resources';
import { useStyledToast } from '@/hooks/app/useStyledToast';
import { parseError } from '@/utils/errorHandler';
import { EnumResourceType } from '@/constants/mangle';
import _ from 'lodash';
import { Form } from '@/components/ui/form';

export const ResourceSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, 'Name is required'),
  status: z.string({ required_error: 'Select resource status' })
});

export type TResourceModalSchema = z.infer<typeof ResourceSchema>;

function ResourceModal() {
  const resourceData = useRef<Partial<TResourceModalSchema>>({});
  const toast = useStyledToast();

  const {
    AppConfigStore: { toggleModals, isOpen, resourceModal }
  } = useStore();

  const queryClient = useQueryClient();

  // Determine if we're in edit mode
  const isEditMode = !!resourceModal.uid;

  const defaultValues = useMemo(() => {
    if (!isEditMode) return { name: '', status: '' };
    return {
      name: resourceModal.name || '',
      status: resourceModal.status || ''
    };
  }, [resourceModal, isEditMode]);

  const form = useForm<TResourceModalSchema>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(ResourceSchema),
    reValidateMode: 'onChange'
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty }
  } = form;

  const getChangedFields = (
    original: Partial<TResourceModalSchema>,
    current: TResourceModalSchema
  ) => {
    return _.pickBy(current, (value, key) => {
      return !_.isEqual(original[key as keyof typeof original], value);
    }) as TResourceModalSchema;
  };

  const onSubmit = async (formData: TResourceModalSchema) => {
    try {
      if (isEditMode) {
        const changedValue = getChangedFields(resourceData.current, formData);
        if (Object.keys(changedValue).length > 0) {
          await patchResource({
            uid: resourceModal.uid,
            type: resourceModal.type as EnumResourceType,
            payload: changedValue
          });
          toast.success(`${resourceModal.type} Updated!`);
          queryClient.invalidateQueries({
            predicate: (query) => query.queryKey[0] === MISC.ALL
          });
          toggleModals({});
        } else {
          toast.success('Nothing to update.');
        }
      } else {
        await postResource({
          type: resourceModal.type as EnumResourceType,
          payload: formData
        });
        toast.success(`${resourceModal.type} Created`);
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === MISC.ALL
        });
        toggleModals({});
      }
    } catch (error) {
      toast.error(parseError(error));
    }
  };

  useEffect(() => {
    if (isEditMode) {
      reset(defaultValues);
      resourceData.current = defaultValues;
    } else {
      reset({ name: '', status: '' });
      resourceData.current = {};
    }
  }, [isEditMode, defaultValues, reset]);

  return (
    <XModal isOpen={isOpen.RESOURCE_MODAL} closeModal={() => toggleModals({})}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-6">
          <DialogTitle>
            {isEditMode ? 'Edit' : 'Add'} {resourceModal.type}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Name"
                      placeholder="Resource name"
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <InputSelect
                      {...field}
                      label="Status"
                      items={resourceStatusOptions}
                      placeholder="Select status..."
                      defaultValue={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      required
                    />
                  )}
                />
              </div>
            </fieldset>

            <DialogFooter className="mt-6 sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" disabled={!isDirty}>
                {isEditMode ? 'Update' : 'Add'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </XModal>
  );
}

export default observer(ResourceModal);
