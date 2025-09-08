import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { paginatedRes } from '@/constants/data';
import ExpenseTable from '@/features/budgets/budgetId/components/ExpenseTable';
import { useFetchAllExpenses } from '@/hooks/expenses/useFetchAllExpenses';

const Expenses = () => {
  const {
    ExpenseStore: { expenseQuery }
  } = useStore();
  const [allExpenses, setAllExpenses] = useState<IFinMedServerPaginatedRes<TExpensesItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchAllExpenses(expenseQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setAllExpenses(data);
    }
  }, [isLoading, data]);
  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <Header>Expenses management</Header>
            <Paragraph>Create, update and manage expenses.</Paragraph>
          </div>
        </div>

        <ExpenseTable {...{ data: allExpenses, isLoading }} />
      </div>
    </Main>
  );
};

export default observer(Expenses);
