import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { observer } from 'mobx-react-lite';

const Expenses = () => {
  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <Header>Expenses management</Header>
            <Paragraph>Create, update and manage expenses.</Paragraph>
          </div>
        </div>

        <div>All expenses</div>
      </div>
    </Main>
  );
};

export default observer(Expenses);
