import ResourceTable from '../components/Table';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlusIcon } from 'lucide-react';
import { SubHeader } from '@/features/components/typography';
import { useFetchExpCat } from '@/hooks/misc/useFetchExpCat';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { EnumStatus, EnumResourceType } from '@/constants/mangle';
import { useStore } from '@/store';

const Categories = () => {
  const {
    AppConfigStore: { toggleModals }
  } = useStore();
  const [Departments, setDepts] = useState<Array<TResource>>([]);
  const { data, isLoading } = useFetchExpCat();

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setDepts(data);
    }
  }, [data, isLoading]);

  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="flex w-full flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2">
        <div>
          <SubHeader>Expense Categories</SubHeader>
        </div>

        <Button
          className="w-fit"
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.RESOURCE_MODAL,
              uid: '',
              resource_name: '',
              status: EnumStatus.ACTIVE,
              type: EnumResourceType.CATEGORY
            })
          }
        >
          <UserPlusIcon />
          Add Category.
        </Button>
      </div>
      <ResourceTable
        {...{
          resourceType: EnumResourceType.CATEGORY,
          isLoading,
          data: Departments,
          placeholder: 'Search category...'
        }}
      />
    </div>
  );
};

export default Categories;
