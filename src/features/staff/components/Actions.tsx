import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { EnumStatus } from '@/constants/mangle';

interface DataTableRowActionsProps {
  row: Row<TUserInfoItem>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="data-[state=open]:bg-muted flex h-8 w-8 p-0">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-fit">
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        {row.original.status === EnumStatus.ACTIVE ||
        row.original.status === EnumStatus.IN_ACTIVE ? (
          <DropdownMenuItem className="text-red-500">Suspend</DropdownMenuItem>
        ) : (
          <DropdownMenuItem>Activate</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
