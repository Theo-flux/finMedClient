import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Route } from '@/routes/_authenticated/budgets/$budgetId';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { Link } from '@tanstack/react-router';
import { EnumBudgetAvailability, EnumBudgetStatus } from '@/constants/mangle';

interface DataTableRowActionsProps {
  row: Row<TSingleBudgetResponse>;
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
              name: AppModals.BUDGET_MODAL,
              uid: row.original.uid
            })
          }
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Expenses</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-fit">
            <DropdownMenuItem>
              <Link to={Route.fullPath.toString().replace('$budgetId', row.original.uid)}>
                All Expenses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                toggleModals({
                  open: true,
                  name: AppModals.EXPENSE_MODAL,
                  uid: '',
                  budget_uid: row.original.uid
                })
              }
            >
              Add expense
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        {(user.role?.name === 'admin' || user.role?.name === 'subadmin') && (
          <DropdownMenuItem
            variant="default"
            onClick={() =>
              toggleModals({
                open: true,
                name: AppModals.BUDGET_STATUS_MODAL,
                uid: row.original.uid,
                budget_status:
                  row.original.status === EnumBudgetStatus.PENDING
                    ? EnumBudgetStatus.APPROVED
                    : row.original.status === EnumBudgetStatus.APPROVED
                      ? EnumBudgetStatus.REJECTED
                      : EnumBudgetStatus.APPROVED
              })
            }
          >
            {row.original.status === EnumBudgetStatus.PENDING && 'Approve'}
            {row.original.status === EnumBudgetStatus.APPROVED && 'Reject'}
            {row.original.status === EnumBudgetStatus.REJECTED && 'Approve'}
          </DropdownMenuItem>
        )}
        {(user.role?.name === 'admin' || user.role?.name === 'subadmin') && (
          <DropdownMenuItem
            onClick={() =>
              toggleModals({
                open: true,
                name: AppModals.BUDGET_AVAILABILITY_MODAL,
                uid: row.original.uid,
                availability:
                  row.original.availability === EnumBudgetAvailability.AVAILABLE
                    ? EnumBudgetAvailability.FROZEN
                    : EnumBudgetAvailability.AVAILABLE
              })
            }
          >
            {row.original.availability === EnumBudgetAvailability.AVAILABLE ? 'Freeze' : 'Unfreeze'}
          </DropdownMenuItem>
        )}
        {row.original.user.uid === user.uid && (
          <DropdownMenuItem
            variant="destructive"
            onClick={() =>
              toggleModals({
                open: true,
                name: AppModals.DELETE_BUDGET_MODAL,
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
