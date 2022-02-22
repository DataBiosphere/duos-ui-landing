import { AlertEnum } from '../enum/AlertEnum';

export default interface Alert {
  alert: AlertType;
}

export type AlertType = {
  alertType: AlertEnum;
  message: string;
};
