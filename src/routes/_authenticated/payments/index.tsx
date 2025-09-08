import Payments from '@/features/payments';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/payments/')({
  component: Payments
});
