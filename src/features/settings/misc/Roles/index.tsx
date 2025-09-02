import { useFetchRoles } from '@/hooks/misc/useFetchRoles';
import ResourceTable from '../components/Table';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlusIcon } from 'lucide-react';
import { SubHeader } from '@/features/components/typography';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { EnumResourceStatus, EnumResourceType } from '@/constants/mangle';

const Roles = () => {
  const {
    AppConfigStore: { toggleModals }
  } = useStore();
  const [roles, setRoles] = useState<Array<TResource>>([]);
  const { data, isLoading } = useFetchRoles();

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setRoles(data);
    }
  }, [data, isLoading]);

  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="flex w-full flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2">
        <div>
          <SubHeader>Roles</SubHeader>
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
              type: EnumResourceType.ROLE
            })
          }
        >
          <UserPlusIcon />
          Add Role
        </Button>
      </div>
      <ResourceTable
        {...{
          resourceType: EnumResourceType.ROLE,
          isLoading,
          data: roles,
          placeholder: 'Search roles...'
        }}
      />
    </div>
  );
};

export default Roles;
