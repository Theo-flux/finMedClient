import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import InputSearch from '@/components/fields/InputSearch';
import { paginatedRes } from '@/constants/data';
import { useFetchUserBudgets } from '@/hooks/budgets/useFetchUserBudgets';
import BudgetTable from './components/BudgetTable';
import { EnumLabBudgetQueryType } from '@/store/BudgetStore';
import { Button } from '@/components/ui/button';
import { Funnel } from 'lucide-react';

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
      <div className="flex flex-col justify-start space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div className="w-full md:w-[200px]">
          <InputSearch placeholder="Search budgets" />
        </div>
        <Button variant="secondary">
          <Funnel />
          Filter
        </Button>
      </div>

      <BudgetTable {...{ type: EnumLabBudgetQueryType.SELF, isLoading, data: budgets }} />
    </div>
  );
};

export default observer(UserBudget);
