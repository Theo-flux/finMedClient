import { EnumBudgetAvailability, EnumBudgetStatus } from '@/constants/mangle';
import { toTitleCase } from '@/utils';
import { transform } from 'lodash';

export const statuses = transform(
  EnumBudgetStatus,
  (result, value) => {
    result.push({ label: toTitleCase(value), value });
  },
  [] as { label: string; value: string }[]
);

export const availability = transform(
  EnumBudgetAvailability,
  (result, value) => {
    result.push({ label: toTitleCase(value), value });
  },
  [] as { label: string; value: string }[]
);
