import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { observer } from 'mobx-react-lite';
import { EnumLabBudgetQueryType } from '@/store/BudgetStore';
import { Link } from '@tanstack/react-router';
import UserBudgets from './UserBudgets';
import AssignedBudgets from './AssignedBudgets';
import { Route } from '@/routes/_authenticated/budgets/index';

const Budget = () => {
  const { tab } = Route.useSearch();

  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <Header>Budget management</Header>
            <Paragraph>Create, update and manage budgets.</Paragraph>
          </div>
        </div>

        <Tabs value={tab ?? EnumLabBudgetQueryType.SELF} className="flex w-full flex-col space-y-4">
          <TabsList className="w-full justify-start gap-1 rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value={EnumLabBudgetQueryType.SELF}
              className="data-[state=active]:border-primary h-full rounded-none border-b-2 border-transparent bg-transparent data-[state=active]:shadow-none"
            >
              <Link to={`?tab=${EnumLabBudgetQueryType.SELF}`}>User</Link>
            </TabsTrigger>
            <TabsTrigger
              value={EnumLabBudgetQueryType.ASSIGNED}
              className="data-[state=active]:border-primary h-full rounded-none border-b-2 border-transparent bg-transparent disabled:cursor-not-allowed data-[state=active]:shadow-none"
            >
              <Link to={`?tab=${EnumLabBudgetQueryType.ASSIGNED}`}>Assigned</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={EnumLabBudgetQueryType.SELF}>
            <UserBudgets />
          </TabsContent>
          <TabsContent value={EnumLabBudgetQueryType.ASSIGNED}>
            <AssignedBudgets />
          </TabsContent>
        </Tabs>
      </div>
    </Main>
  );
};

export default observer(Budget);
