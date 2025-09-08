import { Route } from '@/routes/_authenticated/invoices/$invoiceId';
import { Route as InvoiceRoute } from '@/routes/_authenticated/invoices';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { Main } from '@/components/layout/main';
import { ArrowLeftIcon } from 'lucide-react';
import InvoiceDetails from './components/InvoiceDetails';
import InvoicePayments from './components/InvoicePayments';
import { useFetchSingleInvoice } from '@/hooks/invoices/useFetchSingleInvoice';

const InvoiceId = () => {
  const { invoiceId } = Route.useParams();
  const { data, isLoading } = useFetchSingleInvoice(invoiceId);

  return (
    <Main>
      {isLoading ? (
        <div className="mb-2 flex w-full flex-wrap items-center justify-between space-y-4">
          <div className="mb-2 flex w-full flex-wrap items-center justify-between">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>

          <Skeleton className="h-[50svh] w-full" />
        </div>
      ) : (
        data && (
          <section className="flex flex-col space-y-4">
            <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbSeparator>
                    <ArrowLeftIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="cursor-pointer">
                    <BreadcrumbLink href={InvoiceRoute.fullPath}>invoices</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <InvoiceDetails {...{ data }} />
            <InvoicePayments {...{ invoiceId }} />
          </section>
        )
      )}
    </Main>
  );
};

export default InvoiceId;
