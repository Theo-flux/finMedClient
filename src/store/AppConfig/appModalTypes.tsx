export enum AppModals {
  DONE = 'DONE',
  LOG_OUT_MODAL = 'LOG_OUT_MODAL',
  SET_PWD_MODAL = 'SET_PWD_MODAL',
  RESOURCE_MODAL = 'RESOURCE_MODAL'
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
    ));
