import ROUTES from '@/constants/routes';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createFileRoute(ROUTES.ABOUT.path as keyof FileRoutesByPath)({
  component: About
});

export default function About() {
  return <div className="p-2">Hello from About!</div>;
}
