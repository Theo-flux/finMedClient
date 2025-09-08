import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Funnel, PlusIcon } from 'lucide-react';
import { useStore } from '@/store';
import InputSearch from '@/components/fields/InputSearch';
import { paginatedRes } from '@/constants/data';
import InvoiceTable from './components/InvoiceTable';
import { useFetchInvoices } from '@/hooks/invoices/useFetchInvoices';
import { debounce } from '@/utils/debounce';
import { AppModals } from '@/store/AppConfig/appModalTypes';

const Invoices = () => {
  const {
    AppConfigStore: { toggleModals },
    InvoiceStore: { queries, setQSearch }
  } = useStore();
  const [invoices, setInvoices] = useState<IFinMedServerPaginatedRes<TInvoiceItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchInvoices(queries);

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQSearch(event.target.value);
  };

  const debouncedHandleSearch = debounce(handleSearchQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setInvoices(data);
    }
  }, [isLoading, data]);
  return (
    <Main>
      <div className="flex flex-col space-y-12">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <Header>Invoices management</Header>
            <Paragraph>Create, update and manage invoices.</Paragraph>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col justify-between space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <div className="flex flex-col justify-start space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <div className="w-full md:w-[200px]">
                <InputSearch placeholder="Search budgets" onChange={debouncedHandleSearch} />
              </div>
              <Button variant="secondary">
                <Funnel />
                Filter
              </Button>
            </div>

            <Button
              onClick={() =>
                toggleModals({
                  open: true,
                  name: AppModals.INVOICE_MODAL,
                  uid: ''
                })
              }
            >
              <PlusIcon />
              Create invoice
            </Button>
          </div>

          <InvoiceTable {...{ isLoading, data: invoices }} />
        </div>
      </div>
    </Main>
  );
};

export default observer(Invoices);
