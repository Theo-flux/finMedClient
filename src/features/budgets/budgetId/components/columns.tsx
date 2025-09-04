import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from './Actions';
import { format } from 'date-fns';
import { ccyFormatter } from '@/utils/money';
import { Stores } from '@/store';

export const columns: Array<ColumnDef<TExpensesItem>> = [
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
    accessorKey: 'id',
    header: () => 'ID',
    cell: ({ row }) => {
      return <p className="text-muted-foreground">{row.original.serial_no}</p>;
    }
  },

  {
    accessorKey: 'title',
    header: () => 'Title',
    cell: ({ row }) => {
      return <p className="text-muted-foreground">{row.original.title}</p>;
    }
  },

  {
    accessorKey: 'gross_amount',
    header: () => 'Amount',
    cell: ({ row }) => {
      return <div className="text-muted-foreground">{ccyFormatter(row.original.amount_spent)}</div>;
    }
  },

  {
    accessorKey: 'expenses_category_uid',
    header: () => 'Category',
    cell: ({ row }) => {
      return <div className="text-muted-foreground">{row.original.expenses_category.name}</div>;
    }
  },

  {
    accessorKey: 'user_uid',
    header: () => 'Created by',
    cell: ({ row }) => {
      return (
        <p className="text-muted-foreground">
          {row.original.user.uid === Stores.AuthStore.user.uid
            ? 'You'
            : `${row.original.user.first_name} ${row.original.user.last_name}`}
        </p>
      );
    }
  },

  {
    accessorKey: 'created_at',
    header: () => 'created',
    cell: ({ row }) => {
      return (
        <p className="text-muted-foreground">
          {format(new Date(row.original.created_at), "dd MMM yyyy 'at' h:mmaaa")}
        </p>
      );
    }
  },

  {
    accessorKey: 'updated_at',
    header: () => 'updated',
    cell: ({ row }) => {
      return (
        <p className="text-muted-foreground">
          {format(new Date(row.original.updated_at), "dd MMM yyyy 'at' h:mmaaa")}
        </p>
      );
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
