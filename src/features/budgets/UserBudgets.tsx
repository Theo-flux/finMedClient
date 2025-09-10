import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { paginatedRes } from '@/constants/data';
import { useFetchUserBudgets } from '@/hooks/budgets/useFetchUserBudgets';
import BudgetTable from './components/BudgetTable';
import { EnumLabBudgetQueryType } from '@/store/BudgetStore';

const UserBudget = () => {
  const {
    BudgetStore: { queries }
  } = useStore();
  const [budgets, setBudgets] = useState<IFinMedServerPaginatedRes<TSingleBudgetResponse>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchUserBudgets(queries.self);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setBudgets(data);
    }
  }, [isLoading, data]);

  return (
    <div className="flex flex-col space-y-4">
      <BudgetTable {...{ type: EnumLabBudgetQueryType.SELF, isLoading, data: budgets }} />
    </div>
  );
};

export default observer(UserBudget);
