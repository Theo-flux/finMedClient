import { Button } from '@/components/ui/button';
import { useStore } from '@/store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PwdResetSchema, TPwdResetSchema } from './validations';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';

export function SetPwdForm() {
  const {
    AuthStore: { isLoading },
    AppConfigStore: { toggleModals }
  } = useStore();

  const form = useForm<TPwdResetSchema>({
    defaultValues: { email: '' },
    mode: 'onSubmit',
    resolver: zodResolver(PwdResetSchema),
    reValidateMode: 'onSubmit'
  });

  function onSubmit(data: TPwdResetSchema) {
    console.log(data);
    toggleModals({});
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Set Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your credentials below to set your account password.
          </p>
        </div>
        <fieldset disabled={isLoading.login} className="w-full space-y-6">
          <div className="flex w-full flex-col gap-2">
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <InputField label="Password" id="npassword" type="password" required {...field} />
              )}
            />

            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <InputField
                  label="Confirm Password"
                  id="cpassword"
                  type="password"
                  required
                  {...field}
                />
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading.login}
              isLoading={isLoading.login}
            >
              Set Password
            </Button>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}
