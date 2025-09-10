import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { availability, statuses } from './data';
import { DataTableFacetedFilter } from '@/components/FacedtedFilter';
import { useStore } from '@/store';
import InputSearch from '@/components/fields/InputSearch';
import { ChangeEvent } from 'react';
import { debounce } from '@/utils/debounce';
import { PlusIcon } from 'lucide-react';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { observer } from 'mobx-react-lite';
import { EnumLabBudgetQueryType } from '@/store/BudgetStore';

interface TDataTableToolbarProps {
  type: EnumLabBudgetQueryType;
}

function DataTableToolbar({ type }: TDataTableToolbarProps) {
  const {
    AppConfigStore: { toggleModals },
    BudgetStore: {
      setQSearch,
      resetFilters,
      selectedBudgetStatus,
      selectedBudgetAvailability,
      setBudgetStatusFilter,
      setBudgetAvailabilityFilter
    }
  } = useStore();
  const isFiltered =
    selectedBudgetStatus[type].size > 0 || selectedBudgetAvailability[type].size > 0;

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQSearch(event.target.value, type);
  };

  const debouncedHandleSearch = debounce(handleSearchQuery);

  return (
    <div className="flex flex-col justify-between space-y-2 md:flex-row md:space-y-0 md:space-x-2">
      <div className="flex flex-col justify-start space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div className="w-full md:w-[150px] lg:w-[250px]">
          <InputSearch placeholder="Search budgets" onChange={debouncedHandleSearch} />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <DataTableFacetedFilter
            title="Status"
            options={statuses}
            selectedValues={selectedBudgetStatus[type]}
            onSelectionChange={(values) => setBudgetStatusFilter(values, type)}
          />
          <DataTableFacetedFilter
            title="Availability"
            options={availability}
            selectedValues={selectedBudgetAvailability[type]}
            onSelectionChange={(values) => setBudgetAvailabilityFilter(values, type)}
          />
        </div>
        {isFiltered && (
          <Button variant="ghost" onClick={() => resetFilters(type)} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <Button
        onClick={() =>
          toggleModals({
            open: true,
            name: AppModals.BUDGET_MODAL,
            uid: ''
          })
        }
      >
        <PlusIcon />
        Create budget
      </Button>
    </div>
  );
}

export default observer(DataTableToolbar);
