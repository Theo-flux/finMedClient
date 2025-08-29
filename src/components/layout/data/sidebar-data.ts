import { IconLayoutDashboard } from '@tabler/icons-react';
import { type SidebarData } from '../types';
import { MessageSquare, TableCellsMerge, Wallet2 } from 'lucide-react';

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
          title: 'Messaging',
          icon: MessageSquare,
          rba: [],
          items: [
            { title: 'sms', url: '/', rba: [] },
            { title: 'Phone book', url: '/', rba: [] }
          ]
        },
        {
          title: 'Wallet',
          url: '/',
          icon: Wallet2,
          rba: []
        }
      ]
    },
    {
      title: 'Management',
      items: [
        {
          title: 'Manage cell',
          icon: TableCellsMerge,
          rba: [],
          items: [
            {
              title: 'Members',
              url: '/cell/members',
              rba: []
            },
            {
              title: 'Attendance',
              url: '/cell/attendance',
              rba: []
            }
          ]
        }
      ]
    }
  ]
};
