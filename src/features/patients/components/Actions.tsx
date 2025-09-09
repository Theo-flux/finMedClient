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
import { Route } from '@/routes/_authenticated/invoices/$invoiceId';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { Link } from '@tanstack/react-router';

interface DataTableRowActionsProps {
  row: Row<TPatientItem>;
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
        <DropdownMenuItem
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.PATIENT_MODAL,
              uid: row.original.uid
            })
          }
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invoices</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-fit">
            <DropdownMenuItem>
              <Link to={Route.fullPath.toString().replace('$invoiceId', row.original.uid)}>
                All Invoices
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                toggleModals({
                  open: true,
                  name: AppModals.INVOICE_MODAL,
                  uid: '',
                  patient_uid: row.original.uid
                })
              }
            >
              create invoice
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
