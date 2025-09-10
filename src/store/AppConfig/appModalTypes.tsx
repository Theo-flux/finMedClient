export enum AppModals {
  DONE = 'DONE',
  LOG_OUT_MODAL = 'LOG_OUT_MODAL',
  SET_PWD_MODAL = 'SET_PWD_MODAL',
  RESOURCE_MODAL = 'RESOURCE_MODAL',
  USER_MODAL = 'USER_MODAL',
  BUDGET_MODAL = 'BUDGET_MODAL',
  EXPENSE_MODAL = 'EXPENSE_MODAL',
  INVOICE_MODAL = 'INVOICE_MODAL',
  PAYMENT_MODAL = 'PAYMENT_MODAL',
  PATIENT_MODAL = 'PATIENT_MODAL',
  DELETE_BUDGET_MODAL = 'DELETE_BUDGET_MODAL',
  DELETE_INVOICE_MODAL = 'DELETE_INVOICE_MODAL',
  DELETE_PAYMENT_MODAL = 'DELETE_PAYMENT_MODAL',
  BUDGET_AVAILABILITY_MODAL = 'BUDGET_AVAILABILITY_MODAL',
  BUDGET_STATUS_MODAL = 'BUDGET_STATUS_MODAL',
  DELETE_EXPENSE_MODAL = 'DELETE_EXPENSE_MODAL',
  BUDGET_ASSIGN_MODAL = 'BUDGET_ASSIGN_MODAL',
  BUDGET_UNASSIGN_MODAL = 'BUDGET_UNASSIGN_MODAL'
}

export type TAppModalsAction =
  | { name?: undefined }
  | {
      name: '';
      open?: boolean;
    }
  | ({
      name: AppModals.LOG_OUT_MODAL;
    } & {
      open: boolean;
    })
  | ({ name: AppModals.DONE } & (
      | {
          open: true;
          text: string;
          subText: string;
          ctaText?: string;
          showClose?: boolean;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.SET_PWD_MODAL } & (
      | {
          open: true;
          email_or_staff_no: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.RESOURCE_MODAL } & (
      | {
          open: true;
          uid: string;
          resource_name: string;
          status: string;
          type: string;
        }
      | { open?: false }
    ))
  | ({
      name:
        | AppModals.USER_MODAL
        | AppModals.BUDGET_MODAL
        | AppModals.DELETE_BUDGET_MODAL
        | AppModals.DELETE_EXPENSE_MODAL
        | AppModals.PATIENT_MODAL
        | AppModals.DELETE_INVOICE_MODAL
        | AppModals.DELETE_PAYMENT_MODAL;
    } & (
      | {
          open: true;
          uid: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.INVOICE_MODAL } & (
      | {
          open: true;
          uid: string;
          patient_uid: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.EXPENSE_MODAL } & (
      | {
          open: true;
          uid: string;
          budget_uid: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.PAYMENT_MODAL } & (
      | {
          open: true;
          uid: string;
          invoice_uid: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.BUDGET_AVAILABILITY_MODAL } & (
      | {
          open: true;
          uid: string;
          availability: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.BUDGET_STATUS_MODAL } & (
      | {
          open: true;
          uid: string;
          budget_status: string;
        }
      | { open?: false }
    ))
  | ({ name: AppModals.BUDGET_ASSIGN_MODAL | AppModals.BUDGET_UNASSIGN_MODAL } & (
      | {
          open: true;
          budget_uid: string;
          assignee_uid: string;
        }
      | { open?: false }
    ));
