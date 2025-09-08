type TPaymentQuery = TFinMedServerQuery & {
  payment_method: string | null;
  reference_number: string | null;
};

type TPaymentItem = {
  uid: string;
  created_at: string;
  updated_at: string;
  id: number;
  serial_no: string;
  received_at: string;
  invoice_uid: string;
  user_uid: string;
  payment_method: string;
  amount_received: string;
  reference_number: string;
  note: string;
  user: TAbrigedUser;
};
