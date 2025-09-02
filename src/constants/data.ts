import { EnumResourceStatus } from '@/constants/mangle';
export const paginatedRes: TPaginatedRes = {
  current_page: 1,
  total_pages: 1,
  limit: 30,
  total: 0
};

export const statusTypes = new Map<EnumResourceStatus, string>([
  [
    EnumResourceStatus.ACTIVE,
    'bg-green-100/40 text-green-800 dark:text-green-200 border-green-300'
  ],

  [EnumResourceStatus.IN_ACTIVE, 'bg-red-100/40 text-red-800 dark:text-red-200 border-red-300']
]);

export const resourceStatusOptions = [
  {
    label: 'Active',
    value: EnumResourceStatus.ACTIVE
  },
  {
    label: 'In active',
    value: EnumResourceStatus.IN_ACTIVE
  }
];
