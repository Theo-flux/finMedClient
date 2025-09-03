import { EnumStatus } from '@/constants/mangle';
export const paginatedRes: TPaginatedRes = {
  current_page: 1,
  total_pages: 1,
  limit: 30,
  total: 0
};

export const statusTypes = new Map<EnumStatus, string>([
  [EnumStatus.ACTIVE, 'bg-green-100/40 text-green-800 dark:text-green-200 border-green-300'],
  [EnumStatus.IN_ACTIVE, 'bg-red-100/40 text-red-800 dark:text-red-200 border-red-300'],
  [EnumStatus.SUSPENDED, 'bg-amber-100/40 text-amber-800 dark:text-amber-200 border-amber-300']
]);

export const resourceStatusOptions = [
  {
    label: 'Active',
    value: EnumStatus.ACTIVE
  },
  {
    label: 'In active',
    value: EnumStatus.IN_ACTIVE
  }
];
