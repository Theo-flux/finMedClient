import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "@/store";
import { useEffect } from "react";
import { EnumUserType } from "@/constants/mangle";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const {
    AuthStore: { userType },
  } = useStore();

  useEffect(() => {
    if (userType === EnumUserType.NEW_USER) {
      // TODO:
      // Display new password modal
    }
  }, [userType]);

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your credentials below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email / Staff id</Label>
          <Input
            id="email"
            type="email"
            placeholder="email or staff id"
            required
          />
        </div>
        {userType === EnumUserType.OLD_USER && (
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
        )}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
