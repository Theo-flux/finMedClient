import SettingsMisc from '@/features/settings/misc';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/settings/misc')({
  component: SettingsMisc
});
