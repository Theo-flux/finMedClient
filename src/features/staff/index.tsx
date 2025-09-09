import { Main } from '@/components/layout/main';
import { Paragraph, Header, SubHeader } from '../components/typography';
import { Button } from '@/components/ui/button';
import { Funnel, UserPlusIcon } from 'lucide-react';
import StaffTable from './components/StaffTable';
// import RolePieChart from './components/RolePieChart';
// import Activities from './components/Activities';
import InputSearch from '@/components/fields/InputSearch';
import { paginatedRes } from '@/constants/data';
import { useFetchUsers } from '@/hooks/users/useFetchUsers';
import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { observer } from 'mobx-react-lite';

const Staff = () => {
  const {
    UserStore: { userQuery },
    AppConfigStore: { toggleModals }
  } = useStore();
  const [staff, setStaff] = useState<IFinMedServerPaginatedRes<TUserInfoItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchUsers(userQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setStaff(data);
    }
  }, [isLoading, data]);

  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <Header>Staff management</Header>
            <Paragraph>Create, update and manage staff accounts and permissions.</Paragraph>
          </div>
        </div>

        <div className="flex w-full items-center justify-end space-x-2">
          <Button variant="secondary">
            <Funnel />
            Filter
          </Button>
          <Button
            onClick={() =>
              toggleModals({
                open: true,
                name: AppModals.USER_MODAL,
                uid: ''
              })
            }
          >
            <UserPlusIcon />
            Add staff
          </Button>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col justify-between space-y-2 md:flex-row md:space-y-0">
            <SubHeader>Staff Accounts</SubHeader>
            <div className="w-full md:w-[200px]">
              <InputSearch placeholder="Search staff" />
            </div>
          </div>

          <StaffTable {...{ isLoading, data: staff }} />
        </div>

        {/* <div className="flex w-full flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          <RolePieChart />
          <Activities />
        </div> */}
      </div>
    </Main>
  );
};

export default observer(Staff);
