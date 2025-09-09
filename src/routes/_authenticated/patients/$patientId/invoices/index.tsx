import { createFileRoute } from '@tanstack/react-router';
import PatientInvoices from '@/features/patients/PatientInvoices';

export const Route = createFileRoute('/_authenticated/patients/$patientId/invoices/')({
  component: PatientInvoices
});
