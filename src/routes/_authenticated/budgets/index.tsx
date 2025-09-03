import Budget from '@/features/budgets';
import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

export const verifyBudgetSchema = z.object({
  tab: z.string().optional()
});

export const Route = createFileRoute('/_authenticated/budgets/')({
  component: Budget,
  validateSearch: (search) => verifyBudgetSchema.parse(search)
});
