import Patients from '@/features/patients';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/patients/')({
  component: Patients
});
