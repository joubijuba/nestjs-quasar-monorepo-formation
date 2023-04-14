import dayjs from 'dayjs'

export function convertToHumanDate (date: any, withTime?: boolean, withDayName?: boolean): string {
  const dateFormat = !!withTime ? 'DD/MM/YYYY à H:mm' : 'DD/MM/YYYY'
  let dayName = ''
  const humanDate = date && dayjs(date)
    .isValid() ? dayjs(date)
                      .format(dateFormat) : ''
  if (!!withDayName) {
    dayName = date && dayjs(date) ? dayjs(date)
      .locale('fr')
      .format('dddd') : ''
    return dayName + ' ' + humanDate
  }
  return humanDate
}
