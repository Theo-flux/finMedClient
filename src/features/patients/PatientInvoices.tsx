import { Main } from '@/components/layout/main';
import { Route } from '@/routes/_authenticated/patients/$patientId/invoices';
import { Route as patientRoute } from '@/routes/_authenticated/patients';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Funnel, PlusIcon } from 'lucide-react';
import { useStore } from '@/store';
import InputSearch from '@/components/fields/InputSearch';
import { paginatedRes } from '@/constants/data';
import { debounce } from '@/utils/debounce';
import { AppModals } from '@/store/AppConfig/appModalTypes';
import { Header } from '@/features/components/typography';
import InvoiceTable from '@/features/invoice/components/InvoiceTable';
import { useFetchPatientInvoices } from '@/hooks/patients/useFetchPatientInvoices';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { useFetchPatient } from '@/hooks/patients/useFetchPatient';
import { Skeleton } from '@/components/ui/skeleton';

const PatientInvoices = () => {
  const { patientId } = Route.useParams();
  const {
    AppConfigStore: { toggleModals },
    InvoiceStore: { queries, setQSearch }
  } = useStore();
  const [invoices, setInvoices] = useState<IFinMedServerPaginatedRes<TInvoiceItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const [patient, setPatient] = useState<TPatientItem | null>(null);
  const { data: patientData, isLoading: isPatientLoading } = useFetchPatient(patientId);
  const { data, isLoading } = useFetchPatientInvoices(patientId, queries);

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQSearch(event.target.value);
  };

  const debouncedHandleSearch = debounce(handleSearchQuery);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setInvoices(data);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (!isPatientLoading && patientData != undefined) {
      setPatient(patientData);
    }
  }, [isPatientLoading, patientData]);

  return (
    <Main>
      <section className="flex flex-col space-y-4">
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator>
                <ArrowLeftIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="cursor-pointer">
                <BreadcrumbLink href={patientRoute.fullPath}>patients</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
      <div className="flex flex-col space-y-12">
        {isPatientLoading ? (
          <Skeleton className="h-8 w-1/4" />
        ) : (
          patient && (
            <Header>
              Invoices of {patient.first_name} {patient.last_name}
            </Header>
          )
        )}

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
                  uid: '',
                  patient_uid: patientId
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

export default observer(PatientInvoices);
