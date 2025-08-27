import { z } from "zod";
import { password } from "@/types/validation";

export const LoginValidationSchema = z.object({
  email_staff_no: z.string({ required_error: "Password is required." }),
  password,
});

export type TLogin = z.infer<typeof LoginValidationSchema>;
