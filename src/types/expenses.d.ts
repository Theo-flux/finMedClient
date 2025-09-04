type TExpensesItem = {
  uid: string;
  created_at: srting;
  updated_at: srting;
  id: number;
  serial_no: string;
  budget_uid: string;
  expenses_category_uid: string;
  user_uid: string;
  amount_spent: string;
  title: string;
  short_description: string;
  note: string;
  expenses_category: TResource;
  budget: TBudgetResponseItem;
  user: TAbrigedUser;
};
