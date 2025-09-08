import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { paginatedRes } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { PlusIcon } from 'lucide-react';
import { SubHeader } from '@/features/components/typography';
import PaymentsTable from './PaymentsTable';
import { useFetchInvoicePayments } from '@/hooks/invoices/useFetchInvoicePayments';

const InvoicePayments = ({ invoiceId }: { invoiceId: string }) => {
  const {
    AppConfigStore: { toggleModals },
    PaymentStore: { paymanetQuery }
  } = useStore();
  const [invoicePayments, setInvoicePayments] = useState<
    IFinMedServerPaginatedRes<TPaymentItem>['data']
  >({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchInvoicePayments(invoiceId, paymanetQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setInvoicePayments(data);
    }
  }, [isLoading, data]);

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between space-x-2">
        <SubHeader>All Payments</SubHeader>
        <Button
          onClick={() =>
            toggleModals({
              open: true,
              name: AppModals.PAYMENT_MODAL,
              uid: '',
              invoice_uid: invoiceId
            })
          }
        >
          <PlusIcon />
          Add payment
        </Button>
      </div>
      <PaymentsTable {...{ data: invoicePayments, isLoading }} />
    </div>
  );
};

export default InvoicePayments;
