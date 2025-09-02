import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { Button } from '@/components/ui/button';
import { Funnel, UserPlusIcon } from 'lucide-react';
import StaffTable from './components/StaffTable';
import RolePieChart from './components/RolePieChart';
import Activities from './components/Activities';
import InputSearch from '@/components/fields/InputSearch';
import { paginatedRes } from '@/constants/data';

const Staff = () => {
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
          <Button>
            <UserPlusIcon />
            Add staff
          </Button>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col justify-between space-y-2 md:flex-row md:space-y-0">
            <h3>Staff Accounts</h3>
            <div className="w-full md:w-[200px]">
              <InputSearch placeholder="Search staff" />
            </div>
          </div>

          <StaffTable data={{ data: { items: [], pagination: paginatedRes }, message: '' }} />
        </div>

        <div className="flex w-full flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          <RolePieChart />
          <Activities />
        </div>
      </div>
    </Main>
  );
};

export default Staff;
