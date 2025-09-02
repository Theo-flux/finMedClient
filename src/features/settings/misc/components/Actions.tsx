import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { EnumResourceType } from '@/constants/mangle';

interface DataTableRowActionsProps {
  row: Row<TResource>;
  resourceType: EnumResourceType;
}

export function DataTableRowActions({ row, resourceType }: DataTableRowActionsProps) {
  const {
    AppConfigStore: { toggleModals }
  } = useStore();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="data-[state=open]:bg-muted flex h-8 w-8 p-0">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-fit">
        <DropdownMenuItem
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.RESOURCE_MODAL,
              uid: row.original.uid,
              resource_name: row.original.name,
              status: row.original.status,
              type: resourceType
            })
          }
        >
          Edit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
