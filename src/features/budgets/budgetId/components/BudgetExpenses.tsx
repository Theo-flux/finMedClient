import { useFetchBudgetExpenses } from '@/hooks/budgets/useFetchBudgetExpenses';
import { useStore } from '@/store';
import ExpenseTable from './ExpenseTable';
import { useEffect, useState } from 'react';
import { paginatedRes } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { PlusIcon } from 'lucide-react';
import { SubHeader } from '@/features/components/typography';

const BudgetExpenses = ({ budgetId }: { budgetId: string }) => {
  const {
    AppConfigStore: { toggleModals },
    ExpenseStore: { expenseQuery }
  } = useStore();
  const [budgetExpenses, setBudgetExpenses] = useState<
    IFinMedServerPaginatedRes<TExpensesItem>['data']
  >({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchBudgetExpenses(budgetId, expenseQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setBudgetExpenses(data);
    }
  }, [isLoading, data]);

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between space-x-2">
        <SubHeader>All Expenses</SubHeader>
        <Button
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.EXPENSE_MODAL,
              uid: '',
              budget_uid: budgetId
            })
          }
        >
          <PlusIcon />
          Add expense
        </Button>
      </div>
      <ExpenseTable {...{ data: budgetExpenses, isLoading }} />
    </div>
  );
};

export default BudgetExpenses;
