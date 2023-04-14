export class WorkDoneError {
  logRef: string | undefined
  message: string | undefined
}

export class WorkDone<T> {
  data?: T
  error?: WorkDoneError
  isOk: boolean
  successMessage?: string
  warningMessage?: string

  private constructor (isOk: boolean) {
    this.isOk = isOk
  }

  public static buildError<T> (message: string, logRef?: string): WorkDone<T> {
    const wd = new WorkDone<T>(false)
    wd.error = { message, logRef }
    return wd
  }

  public static buildOk<T> (data: T, successMessage?: string, warningMessage?: string): WorkDone<T> {
    const wd = new WorkDone<T>(true)
    wd.data = data
    wd.successMessage = successMessage
    wd.warningMessage = warningMessage
    return wd
  }

  public static toError<T> (from: WorkDone<any>): WorkDone<T> {
    const wd = new WorkDone<T>(false)
    wd.error = from.error
    return wd
  }

  public static toOkNotOk (from: WorkDone<any>): WorkDone<boolean> {
    const wd = new WorkDone<boolean>(from.isOk)
    wd.error = from.error
    return wd
  }
}
