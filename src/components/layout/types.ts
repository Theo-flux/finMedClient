import { LinkProps } from '@tanstack/react-router';

interface BaseNavItem {
  title: string;
  badge?: string;
  icon?: React.ElementType;
  rba: Array<string>;
}

type NavLink = BaseNavItem & {
  url: LinkProps['to'];
  rba: Array<string>;
  items?: never;
};

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps['to'] })[];
  url?: never;
};

type NavItem = NavCollapsible | NavLink;

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface SidebarData {
  navGroups: Array<NavGroup>;
}

export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink };
