import { Main } from '@/components/layout/main';
import { Paragraph, Header } from '../components/typography';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { useEffect, useState } from 'react';
import { paginatedRes } from '@/constants/data';
import PatientTable from './components/PatientTable';
import { useFetchAllPatients } from '@/hooks/patients/useFetchAllPatients';

const Patients = () => {
  const {
    PatientStore: { queries }
  } = useStore();
  const [allPatients, setAllPatients] = useState<IFinMedServerPaginatedRes<TPatientItem>['data']>({
    items: [],
    pagination: paginatedRes
  });
  const { data, isLoading } = useFetchAllPatients(queries);

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setAllPatients(data);
    }
  }, [isLoading, data]);
  return (
    <Main>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <Header>Patients management</Header>
            <Paragraph>Create, update and manage patients.</Paragraph>
          </div>
        </div>

        <PatientTable {...{ data: allPatients, isLoading }} />
      </div>
    </Main>
  );
};

export default observer(Patients);
