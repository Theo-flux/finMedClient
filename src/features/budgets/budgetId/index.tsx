import { useFetchBudget } from '@/hooks/budgets/useFetchBudget';
import { Route } from '@/routes/_authenticated/budgets/$budgetId';
import { Route as BudgetRoute } from '@/routes/_authenticated/budgets';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { Main } from '@/components/layout/main';
import BudgetDetails from './components/BudgetDetails';
import BudgetExpenses from './components/BudgetExpenses';
import { ArrowLeftIcon } from 'lucide-react';

const BudgetId = () => {
  const { budgetId } = Route.useParams();
  const { data, isLoading } = useFetchBudget(budgetId);
  console.log({ data, isLoading });
  return (
    <Main>
      {isLoading ? (
        <div className="mb-2 flex w-full flex-wrap items-center justify-between space-y-4">
          <div className="mb-2 flex w-full flex-wrap items-center justify-between">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>

          <Skeleton className="h-[50svh] w-full" />
        </div>
      ) : (
        data && (
          <section className="flex flex-col space-y-4">
            <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbSeparator>
                    <ArrowLeftIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="cursor-pointer">
                    <BreadcrumbLink href={BudgetRoute.fullPath}>budgets</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <BudgetDetails {...{ data }} />
            <BudgetExpenses {...{ budgetId }} />
          </section>
        )
      )}
    </Main>
  );
};

export default BudgetId;
