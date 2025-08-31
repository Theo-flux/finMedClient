import { Button } from '@/components/ui/button';
import { useStore } from '@/store';
import { EnumUserType } from '@/constants/mangle';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, TLoginSchema } from './validations';
import { Form, FormField } from '@/components/ui/form';
import InputField from '@/components/fields/InputField';
import { observer } from 'mobx-react-lite';

function LoginForm() {
  const {
    AuthStore: { userType, login, isLoading }
  } = useStore();

  const form = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(LoginSchema),
    reValidateMode: 'onChange'
  });

  function onSubmit(data: TLoginSchema) {
    login(data);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your credentials below to login to your account
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset disabled={isLoading.login} className="w-full space-y-6">
            <div className="flex w-full flex-col gap-2">
              <FormField
                control={form.control}
                name="email_or_staff_no"
                render={({ field }) => (
                  <InputField
                    label="Email/Staff No."
                    id="email"
                    type="text"
                    placeholder="email or staff no."
                    required
                    {...field}
                  />
                )}
              />

              {userType === EnumUserType.OLD_USER && (
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <InputField
                      label="Password"
                      id="password"
                      type="password"
                      required
                      {...field}
                    />
                  )}
                />
              )}

              <Button
                size="lg"
                type="submit"
                className="w-full"
                disabled={isLoading.login}
                isLoading={isLoading.login}
              >
                Login
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
}

export default observer(LoginForm);
