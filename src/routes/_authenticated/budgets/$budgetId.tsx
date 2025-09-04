import BudgetId from '@/features/budgets/budgetId';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/budgets/$budgetId')({
  component: BudgetId
});
