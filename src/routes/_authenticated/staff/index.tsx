import Staff from '@/features/staff';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/staff/')({
  component: Staff
});
