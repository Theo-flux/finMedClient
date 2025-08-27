export enum AppModals {
  DONE = "DONE",
  LOG_OUT_MODAL = "LOG_OUT_MODAL",
}

export type TAppModalsAction =
  | { name?: undefined }
  | {
      name: "";
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
    ));
