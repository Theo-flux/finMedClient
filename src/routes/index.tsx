import { Button } from '@/components/ui/button';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';
import ROUTES from '@/constants/routes';

export const Route = createFileRoute(ROUTES.HOME.path as keyof FileRoutesByPath)({
  component: Index
});

export default function Index() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => alert('Hello, world!')}>Click me</Button>
    </div>
  );
}
