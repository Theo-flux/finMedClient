import ResourceTable from '../components/Table';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlusIcon } from 'lucide-react';
import { SubHeader } from '@/features/components/typography';
import { useFetchDepts } from '@/hooks/misc/useFetchDepts';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { EnumResourceStatus, EnumResourceType } from '@/constants/mangle';

const Departments = () => {
  const {
    AppConfigStore: { toggleModals }
  } = useStore();
  const [Departments, setDepts] = useState<Array<TResource>>([]);
  const { data, isLoading } = useFetchDepts();

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setDepts(data);
    }
  }, [data, isLoading]);

  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="flex w-full flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2">
        <div>
          <SubHeader>Departments</SubHeader>
        </div>

        <Button
          className="w-fit"
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.RESOURCE_MODAL,
              uid: '',
              resource_name: '',
              status: EnumResourceStatus.ACTIVE,
              type: EnumResourceType.DEPT
            })
          }
        >
          <UserPlusIcon />
          Add Dept.
        </Button>
      </div>
      <ResourceTable
        {...{
          resourceType: EnumResourceType.DEPT,
          isLoading,
          data: Departments,
          placeholder: 'Search Departments...'
        }}
      />
    </div>
  );
};

export default Departments;
