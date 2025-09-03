// TableColumns.ts
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from './Actions';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { toTitleCase } from '@/utils';
import { statusTypes } from '@/constants/data';
import { EnumStatus, EnumResourceType } from '@/constants/mangle';
import { cn } from '@/lib/utils';

export function getColumns(resourceType: EnumResourceType): Array<ColumnDef<TResource>> {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
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
      accessorKey: 'name',
      header: () => 'Name',
      cell: ({ row }) => <p className="text-muted-foreground">{row.original.name}</p>
    },

    {
      accessorKey: 'created_at',
      header: () => 'Date created',
      cell: ({ row }) => (
        <p className="text-muted-foreground">
          {format(new Date(row.original.created_at), 'dd MMM, YYY')}
        </p>
      )
    },

    {
      accessorKey: 'updated_at',
      header: () => 'Date updated',
      cell: ({ row }) => (
        <p className="text-muted-foreground">
          {format(new Date(row.original.updated_at), 'dd MMM, YYY')}
        </p>
      )
    },

    {
      accessorKey: 'status',
      header: () => 'Status',
      cell: ({ row }) => {
        const badgeColor = statusTypes.get(row.original.status as EnumStatus);
        return (
          <Badge className={cn('capitalize', badgeColor)}>{toTitleCase(row.original.status)}</Badge>
        );
      }
    },

    {
      id: 'actions',
      cell: ({ row }) => <DataTableRowActions row={row} resourceType={resourceType} />
    }
  ];
}
