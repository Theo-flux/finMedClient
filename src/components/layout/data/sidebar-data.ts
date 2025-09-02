import { IconLayoutDashboard } from '@tabler/icons-react';
import { type SidebarData } from '../types';
import {
  BadgeDollarSign,
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  BanknoteIcon,
  IdCardIcon,
  UsersIcon
} from 'lucide-react';
import { EnumRoles } from '@/constants/mangle';

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
          rba: []
        },
        {
          title: 'Budgets',
          url: '/budgets',
          icon: BadgeDollarSign,
          rba: []
        },
        {
          title: 'Expenses',
          url: '/expenses',
          icon: BanknoteArrowDownIcon,
          rba: []
        },
        {
          title: 'Invoices',
          url: '/invoices',
          icon: BanknoteIcon,
          rba: []
        },
        {
          title: 'Payments',
          url: '/payments',
          icon: BanknoteArrowUpIcon,
          rba: []
        }
      ]
    },
    {
      title: 'Management',
      items: [
        {
          title: 'Staff',
          url: '/staff',
          icon: IdCardIcon,
          rba: [EnumRoles.ADMIN]
        },
        {
          title: 'Patients',
          url: '/patients',
          icon: UsersIcon,
          rba: []
        }
      ]
    }
  ]
};
