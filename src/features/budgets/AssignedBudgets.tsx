import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { paginatedRes } from '@/constants/data';
import BudgetTable from './components/BudgetTable';
import { useFetchUserAssignedBudgets } from '@/hooks/budgets/useFetchAssignedBudgets';
import { EnumLabBudgetQueryType } from '@/store/BudgetStore';

const AssignedBudgets = () => {
  const {
    BudgetStore: { queries }
  } = useStore();
  const [budgets, setBudgets] = useState<IFinMedServerPaginatedRes<TSingleBudgetResponse>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchUserAssignedBudgets(queries.assigned);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setBudgets(data);
    }
  }, [isLoading, data]);

  return (
    <div className="flex flex-col space-y-4">
      <BudgetTable {...{ type: EnumLabBudgetQueryType.ASSIGNED, isLoading, data: budgets }} />
    </div>
  );
};

export default observer(AssignedBudgets);
