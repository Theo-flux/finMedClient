import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { observer } from 'mobx-react-lite';

const Payments = () => {
  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <Header>Payments management</Header>
            <Paragraph>Create, update and manage payments.</Paragraph>
          </div>
        </div>

        <div>All payments</div>
      </div>
    </Main>
  );
};

export default observer(Payments);
