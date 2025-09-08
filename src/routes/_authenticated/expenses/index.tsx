import Expenses from '@/features/expenses';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/expenses/')({
  component: Expenses
});
