import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from './Actions';
import { format } from 'date-fns';
import { statusTypes } from '@/constants/data';
import { EnumStatus } from '@/constants/mangle';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { getInitials, toTitleCase } from '@/utils';

export const columns: Array<ColumnDef<TUserInfoItem>> = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },

  {
    accessorKey: 'first_name',
    header: () => 'Name',
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start space-x-2">
          <Avatar className="rounded-lg border">
            <AvatarImage src={row.original.avatar} />
            <AvatarFallback>
              {getInitials(`${row.original.first_name} ${row.original.last_name}`)}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center justify-start space-x-1">
            <p className="text-muted-foreground">{row.original.first_name}</p>
            <p className="text-muted-foreground">{row.original.last_name}</p>
          </div>
        </div>
      );
    }
  },

  {
    accessorKey: 'staff_no',
    header: () => 'Staff No',
    cell: ({ row }) => {
      return <p className="text-muted-foreground">{row.original.staff_no}</p>;
    }
  },

  {
    accessorKey: 'email',
    header: () => 'Email',
    cell: ({ row }) => {
      return <p className="text-muted-foreground">{row.original.email}</p>;
    }
  },

  {
    accessorKey: 'role',
    header: () => 'Role',
    cell: ({ row }) => {
      return <div className="text-muted-foreground">{row.original.role.name}</div>;
    }
  },

  {
    accessorKey: 'department',
    header: () => 'Dept.',
    cell: ({ row }) => {
      return <div className="text-muted-foreground">{row.original.department.name}</div>;
    }
  },

  {
    accessorKey: 'status',
    header: () => 'Status',
    cell: ({ row }) => {
      const badgeColor = statusTypes.get(row.original.status as EnumStatus);
      return <Badge className={cn(badgeColor)}>{toTitleCase(row.original.status)}</Badge>;
    }
  },

  {
    accessorKey: 'last_login',
    header: () => 'Last login',
    cell: ({ row }) => {
      return (
        <p className="text-muted-foreground">
          {row.original.last_login &&
            format(new Date(row.original.last_login), "dd MMM yyyy 'at' h:mmaaa")}
        </p>
      );
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
