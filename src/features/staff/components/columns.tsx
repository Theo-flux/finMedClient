import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from './Actions';

export const columns: Array<ColumnDef<TStaffInfoItem>> = [
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
        <div className="text-muted-foreground">
          <div>
            <small className="text-muted-foreground">{row.original.first_name}</small>
            <small className="text-muted-foreground">{row.original.last_name}</small>
          </div>
        </div>
      );
    }
  },

  {
    accessorKey: 'staff_no',
    header: () => 'Staff No',
    cell: ({ row }) => {
      return <small className="text-muted-foreground">{row.original.staff_no}</small>;
    }
  },

  {
    accessorKey: 'email',
    header: () => 'Email',
    cell: ({ row }) => {
      return <small className="text-muted-foreground">{row.original.email}</small>;
    }
  },

  {
    accessorKey: 'role',
    header: () => 'Role',
    cell: ({ row }) => {
      return <div className="flex space-x-2">{row.original.role.name}</div>;
    }
  },

  {
    accessorKey: 'department',
    header: () => 'Dept.',
    cell: ({ row }) => {
      return <div className="flex space-x-2">{row.original.department.name}</div>;
    }
  },

  {
    accessorKey: 'status',
    header: () => 'Status',
    cell: ({ row }) => {
      return <div className="flex space-x-2">{row.original.status}</div>;
    }
  },

  {
    accessorKey: 'last_login',
    header: () => 'Last login',
    cell: ({ row }) => {
      return <small className="text-muted-foreground">{row.original.last_login}</small>;
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
