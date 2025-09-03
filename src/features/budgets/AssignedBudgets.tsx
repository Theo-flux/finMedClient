import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Funnel } from 'lucide-react';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import InputSearch from '@/components/fields/InputSearch';
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
      <div className="flex flex-col justify-start space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div className="w-full md:w-[200px]">
          <InputSearch placeholder="Search budgets" />
        </div>
        <Button variant="secondary">
          <Funnel />
          Filter
        </Button>
      </div>

      <BudgetTable {...{ type: EnumLabBudgetQueryType.ASSIGNED, isLoading, data: budgets }} />
    </div>
  );
};

export default observer(AssignedBudgets);
