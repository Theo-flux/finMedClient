type TBudgetResponseItem = {
  uid: string;
  created_at: string;
  updated_at: string;
  id: number;
  serial_no: string;
  received_at: string;
  approved_at: string;
  department_uid: string;
  user_uid: string;
  approver_uid: string;
  assignee_uid: string;
  status: string;
  availability: string;
  gross_amount: string;
  amount_remaining: string;
  title: string;
  short_description: string;
};

type TSingleBudgetResponse = TBudgetResponseItem & {
  department: TResource;
  user: TAbrigedUser;
  approver: TAbrigedUser;
  assignee: TAbrigedUser;
};

type TBudgetQuery = TFinMedServerQuery & {
  budget_status: string | null;
  budget_availability: string | null;
};

type TExpensesQuery = TFinMedServerQuery & {
  expenses_category_uid: string | null;
};
