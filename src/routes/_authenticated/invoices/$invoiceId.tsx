import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/invoices/$invoiceId')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/_authenticated/invoices/$invoiceId"!</div>;
}
