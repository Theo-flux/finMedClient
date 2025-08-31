import { z } from 'zod';
import { password } from '@/types/validation';

export const LoginSchema = z.object({
  email_or_staff_no: z.string({ required_error: 'Email or staff no is required.' }),
  password: password.optional()
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
