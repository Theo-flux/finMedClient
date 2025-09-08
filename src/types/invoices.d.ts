type TInvoiceQuery = TFinMedServerQuery & {
  invoice_status: string | null;
};

type TInvoiceItem = {
  uid: string;
  created_at: string;
  updated_at: string;
  id: number;
  serial_no: string;
  invoiced_at: string;
  invoice_type: string;
  status: string;
  title: string;
  gross_amount: string;
  tax_percent: string;
  discount_percent: string;
  net_amount_due: string;
  department_uid: string;
  service_uid: string;
  patient_uid: string;
  user_uid: string;
  user: TAbrigedUser;
  service: TResource;
  department: TResource;
  patient: TPatientItem;
};
