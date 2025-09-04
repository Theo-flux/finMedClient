import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';

interface DataTableRowActionsProps {
  row: Row<TExpensesItem>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const {
    AuthStore: { user },
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
              name: AppModals.EXPENSE_MODAL,
              uid: row.original.uid,
              budget_uid: row.original.budget_uid
            })
          }
        >
          Edit
        </DropdownMenuItem>

        {row.original.user.uid === user.uid && (
          <DropdownMenuItem
            variant="destructive"
            onClick={() =>
              toggleModals({
                open: true,
                name: AppModals.DELETE_EXPENSE_MODAL,
                uid: row.original.uid
              })
            }
          >
            Delete
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
