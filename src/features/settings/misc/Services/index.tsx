import ResourceTable from '../components/Table';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlusIcon } from 'lucide-react';
import { SubHeader } from '@/features/components/typography';
import { useFetchServices } from '@/hooks/misc/useFetchServices';
import { EnumResourceStatus, EnumResourceType } from '@/constants/mangle';
import { useStore } from '@/store';
import { AppModals } from '@/store/AppConfig/appModalTypes';

const Services = () => {
  const {
    AppConfigStore: { toggleModals }
  } = useStore();
  const [services, setServices] = useState<Array<TResource>>([]);
  const { data, isLoading } = useFetchServices();

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setServices(data);
    }
  }, [data, isLoading]);

  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="flex w-full flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2">
        <div>
          <SubHeader>Services</SubHeader>
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
              type: EnumResourceType.SERVICE
            })
          }
        >
          <UserPlusIcon />
          Add Service.
        </Button>
      </div>
      <ResourceTable
        {...{
          resourceType: EnumResourceType.SERVICE,
          isLoading,
          data: services,
          placeholder: 'Search services...'
        }}
      />
    </div>
  );
};

export default Services;
