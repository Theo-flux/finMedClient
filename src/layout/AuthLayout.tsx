import Cookies from 'js-cookie';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { SearchProvider } from '@/context/searchContext';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import { useEffect } from 'react';
import { Route as loginRoute } from '@/routes/auth/login';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { Header } from '@/components/layout/header';
import ProfileDropdown from '@/components/Profile';
import { ThemeSwitch } from '@/components/themeSwitch';
import { Search } from '@/components/search';
import PageLoading from '@/components/Loaders/PageLoading';
import { useFetchProfile } from '@/hooks/auth/useFetchProfile';

const AuthLayout = () => {
  const defaultOpen = Cookies.get('sidebar_state') !== 'false';
  const { data, status } = useFetchProfile();
  const {
    AuthStore: { setUser, accessToken, refreshToken }
  } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if ((!accessToken && !refreshToken) || status == 'error') {
      navigate({ to: loginRoute.fullPath, replace: true });
      return;
    }
  }, [accessToken, refreshToken, status, navigate]);

  useEffect(() => {
    if (status == 'success' && data != undefined) {
      setUser(data);
    }
  }, [status]);

  if (!accessToken && !refreshToken) return <PageLoading />;

  if (status == 'pending') return <PageLoading />;

  return (
    <SearchProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div
          id="content"
          className={cn(
            'ml-auto w-full max-w-full',
            'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
            'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
            'sm:transition-[width] sm:duration-200 sm:ease-linear',
            'flex h-svh flex-col',
            'group-data-[scroll-locked=1]/body:h-full',
            'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh'
          )}
        >
          <Header fixed>
            <Search />
            <div className="ml-auto flex items-center space-x-4">
              <ThemeSwitch />
              <ProfileDropdown />
            </div>
          </Header>
          <Outlet />
        </div>
      </SidebarProvider>
    </SearchProvider>
  );
};

export default observer(AuthLayout);
