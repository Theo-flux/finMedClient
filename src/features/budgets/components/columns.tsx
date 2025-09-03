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
import { Progress } from '@/components/ui/progress';

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
      return <p className="text-muted-foreground">{row.original.title}</p>;
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
      const grossAmount = Number(row.original.gross_amount) || 0;
      const amountRemaining = Number(row.original.amount_remaining) || 0;
      const amountSpent = grossAmount - amountRemaining;

      if (grossAmount === 0) {
        return <span className="text-sm text-gray-500">N/A</span>;
      }

      const progress = Math.min((amountSpent / grossAmount) * 100, 100);
      const isOverBudget = amountSpent > grossAmount;
      const isNearLimit = progress >= 80 && !isOverBudget;

      const getProgressColor = () => {
        if (isOverBudget) return '[&>div]:bg-red-500';
        if (isNearLimit) return '[&>div]:bg-yellow-500';
        return '[&>div]:bg-green-500';
      };

      return (
        <div className="flex w-full items-center gap-2">
          <Progress value={progress} className={`w-[80%] ${getProgressColor()}`} />
          <div className="flex flex-col items-center text-xs">
            <span className={isOverBudget ? 'text-red-600' : 'text-gray-700'}>
              {progress.toFixed(1)}%
            </span>
          </div>
        </div>
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
        <div className="flex items-center justify-start space-x-2">
          <p className="text-muted-foreground">{row.original.user.first_name}</p>
          <p className="text-muted-foreground">{row.original.user.last_name}</p>
        </div>
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
