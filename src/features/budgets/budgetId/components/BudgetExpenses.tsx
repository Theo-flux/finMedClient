import { useFetchBudgetExpenses } from '@/hooks/budgets/useFetchBudgetExpenses';
import { useStore } from '@/store';
import ExpenseTable from './ExpenseTable';
import { useEffect, useState } from 'react';
import { paginatedRes } from '@/constants/data';
import { Header } from '@/features/components/typography';
import { Button } from '@/components/ui/button';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { PlusIcon } from 'lucide-react';

const BudgetExpenses = ({ budgetId }: { budgetId: string }) => {
  const {
    AppConfigStore: { toggleModals },
    ExpenseStore: { expenseQuery }
  } = useStore();
  const [expenses, setBudgets] = useState<IFinMedServerPaginatedRes<TExpensesItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchBudgetExpenses(budgetId, expenseQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setBudgets(data);
    }
  }, [isLoading, data]);

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between space-x-2">
        <Header>All expenses</Header>
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
      <ExpenseTable {...{ data: expenses, isLoading }} />
    </div>
  );
};

export default BudgetExpenses;
