import { ChevronsUpDown, WalletCardsIcon } from 'lucide-react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';

function SidebarTop() {
  const {
    AuthStore: { user }
  } = useStore();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <WalletCardsIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">FinMed Inc.</span>
                <small>{user.role?.name}</small>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default observer(SidebarTop);
