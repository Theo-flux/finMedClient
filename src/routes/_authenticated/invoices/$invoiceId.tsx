import InvoiceId from '@/features/invoice/invoiceId';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/invoices/$invoiceId')({
  component: InvoiceId
});
