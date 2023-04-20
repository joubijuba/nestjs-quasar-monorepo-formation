import { Notify } from 'quasar'

export enum NotificationStatusEnum {
  SUCCESS = 'positive',
  FAILURE = 'negative',
  WARNING = 'warning',
  INFORMATIVE = 'info'
}

export function displayNotification (status: NotificationStatusEnum, message: string) {
  Notify.create({
    type: status,
    color: status,
    message: message,
    position: 'top-right',
    progress: false,
    timeout: setTimeOutNotify(status),
    actions: status !== NotificationStatusEnum.SUCCESS ? [{ icon: 'close', color: 'white' }] : undefined
  })
}

function setTimeOutNotify (status: NotificationStatusEnum) {
  if (status === NotificationStatusEnum.SUCCESS) {
    return 5000
  }
  if (status === NotificationStatusEnum.WARNING) {
    return 3000
  }
  return 30000
}
