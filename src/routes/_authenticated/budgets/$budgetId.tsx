import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/budgets/$budgetId')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/_authenticated/budgets/$budgetId"!</div>;
}
