import { z } from 'zod';
import { password } from '@/types/validation';

export const PwdResetSchema = z
  .object({
    email_or_staff_no: z.string({ required_error: 'Email or staff no is required.' }),
    new_password: password,
    confirm_password: password
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: 'Passwords do not match.',
    path: ['confirm_password']
  });

export type TPwdResetSchema = z.infer<typeof PwdResetSchema>;
