import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { paginatedRes } from '@/constants/data';
import { useFetchAllPayments } from '@/hooks/payments/useFetchAllPayments';
import PaymentsTable from '../invoice/invoiceId/components/PaymentsTable';

const Expenses = () => {
  const {
    ExpenseStore: { expenseQuery }
  } = useStore();
  const [allPayments, setAllPayments] = useState<IFinMedServerPaginatedRes<TPaymentItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchAllPayments(expenseQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setAllPayments(data);
    }
  }, [isLoading, data]);
  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <Header>Payments management</Header>
            <Paragraph>Create, update and manage payments.</Paragraph>
          </div>
        </div>

        <PaymentsTable {...{ data: allPayments, isLoading }} />
      </div>
    </Main>
  );
};

export default observer(Expenses);
