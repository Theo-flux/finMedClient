import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from './Actions';
import { format } from 'date-fns';
import { budgetAvailabilityTypes, budgetStatusTypes } from '@/constants/data';
import { EnumBudgetAvailability, EnumBudgetStatus } from '@/constants/mangle';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { toTitleCase } from '@/utils';
import { ccyFormatter } from '@/utils/money';
import { BudgetProgressBar } from '../BudgetProgressBar';
import _ from 'lodash';
import { Stores } from '@/store';

export const columns: Array<ColumnDef<TSingleBudgetResponse>> = [
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
      return <p className="text-muted-foreground">{_.capitalize(row.original.title)}</p>;
    }
  },

  {
    accessorKey: 'department',
    header: () => 'Dept.',
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">{_.capitalize(row.original.department.name)}</div>
      );
    }
  },

  {
    accessorKey: 'gross_amount',
    header: () => 'Amount',
    cell: ({ row }) => {
      return <div className="text-muted-foreground">{ccyFormatter(row.original.gross_amount)}</div>;
    }
  },

  {
    accessorKey: 'amount_remaining',
    header: () => 'Consumption',
    cell: ({ row }) => {
      return (
        <BudgetProgressBar
          {...{
            grossAmount: Number(row.original.gross_amount),
            amountRemaining: Number(row.original.amount_remaining)
          }}
        />
      );
    }
  },

  {
    accessorKey: 'status',
    header: () => 'Status',
    cell: ({ row }) => {
      const badgeColor = budgetStatusTypes.get(row.original.status as EnumBudgetStatus);
      return <Badge className={cn(badgeColor)}>{toTitleCase(row.original.status)}</Badge>;
    }
  },

  {
    accessorKey: 'availability',
    header: () => 'Availability',
    cell: ({ row }) => {
      const badgeColor = budgetAvailabilityTypes.get(
        row.original.availability as EnumBudgetAvailability
      );
      return <Badge className={cn(badgeColor)}>{toTitleCase(row.original.availability)}</Badge>;
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
            : `${_.capitalize(row.original.user.first_name)} ${_.capitalize(row.original.user.last_name)}`}
        </p>
      );
    }
  },

  {
    accessorKey: 'created_at',
    header: () => 'Date created',
    cell: ({ row }) => {
      return (
        <p className="text-muted-foreground">
          {format(new Date(row.original.created_at), "dd MMM yyyy 'at' h:mmaaa")}
        </p>
      );
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
