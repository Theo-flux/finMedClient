import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/expenses/$expenseId')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/_authenticated/expenses/$expenseId"!</div>;
}
