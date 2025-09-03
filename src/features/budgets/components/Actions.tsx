import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Route } from '@/routes/_authenticated/budgets/$budgetId';
import { EnumStatus } from '@/constants/mangle';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { Link } from '@tanstack/react-router';

interface DataTableRowActionsProps {
  row: Row<TSingleBudgetResponse>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
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
        <DropdownMenuItem>
          <Link to={Route.fullPath.toString().replace('$budgetId', row.original.uid)}>View</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.BUDGET_MODAL,
              uid: row.original.uid
            })
          }
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>Quick expense</DropdownMenuItem>
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
