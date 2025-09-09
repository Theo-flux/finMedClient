import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/patients/$patientId/invoices/$invoiceId')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/_authenticated/patients/invoices/$invoices"!</div>;
}
