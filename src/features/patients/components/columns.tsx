import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from './Actions';
import { format } from 'date-fns';
import { patientTypeBadge } from '@/constants/data';
import { EnumPatientType } from '@/constants/mangle';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { toTitleCase } from '@/utils';
import _ from 'lodash';

export const columns: Array<ColumnDef<TPatientItem>> = [
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
      return <p className="text-muted-foreground">{row.original.hospital_id}</p>;
    }
  },

  {
    accessorKey: 'first_name',
    header: () => 'Full Name',
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start space-x-1">
          <p className="text-muted-foreground">{_.capitalize(row.original.first_name)}</p>
          <p className="text-muted-foreground">{_.capitalize(row.original.other_name)[0]}.</p>
          <p className="text-muted-foreground">{_.capitalize(row.original.last_name)}</p>
        </div>
      );
    }
  },

  {
    accessorKey: 'gender',
    header: () => 'Gender',
    cell: ({ row }) => {
      return <div className="text-muted-foreground">{_.capitalize(row.original.gender)[0]}</div>;
    }
  },

  {
    accessorKey: 'patient_type',
    header: () => 'Patient Type',
    cell: ({ row }) => {
      const badgeColor = patientTypeBadge.get(row.original.patient_type as EnumPatientType);
      return <Badge className={cn(badgeColor)}>{toTitleCase(row.original.patient_type)}</Badge>;
    }
  },

  {
    accessorKey: 'user_uid',
    header: () => 'Added by',
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start space-x-1">
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
