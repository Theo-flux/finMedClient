import { Main } from '@/components/layout/main';
import { observer } from 'mobx-react-lite';
import DynamicDB from './DynamicDB';

const Dashboard = () => {
  return (
    <>
      <Main>
        <DynamicDB />
      </Main>
    </>
  );
};

export default observer(Dashboard);
