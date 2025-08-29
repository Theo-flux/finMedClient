import { z } from 'zod';
import { email, password } from '@/types/validation';

export const PwdResetSchema = z
  .object({
    email,
    new_password: password,
    confirm_password: password
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: 'Passwords do not match.',
    path: ['confirm_password']
  });

export type TPwdResetSchema = z.infer<typeof PwdResetSchema>;
