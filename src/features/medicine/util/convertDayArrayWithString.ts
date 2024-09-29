import { EN_DAYS, EVERYDAY, WEEKDAYS, WEEKENDS } from '@/constants'

type convertDayArrayToStringType = (days: string[]) => string
export const convertDayArrayToString: convertDayArrayToStringType = (days) => {
  const isWeekdays = WEEKDAYS.every((day) => days.includes(day)) && days.length === WEEKDAYS.length
  const isWeekends = WEEKENDS.every((day) => days.includes(day)) && days.length === WEEKENDS.length
  const isEveryDay = EVERYDAY.every((day) => days.includes(day)) && days.length === 7

  if (isEveryDay) {
    return '매일'
  } else if (isWeekdays) {
    return '평일'
  } else if (isWeekends) {
    return '주말'
  } else {
    return days.join(', ')
  }
}

type convertDayStringToArrayType = (fieldValue: string) => string[]
export const convertDayStringToArray: convertDayStringToArrayType = (fieldValue) => {
  if (fieldValue === '매일') {
    return [...WEEKDAYS, ...WEEKENDS]
  } else if (fieldValue === '평일') {
    return WEEKDAYS
  } else if (fieldValue === '주말') {
    return WEEKENDS
  } else {
    return fieldValue.split(', ').map((day) => day.trim())
  }
}

type convertDayArrayToEnglishType = (days: string[]) => string[]
export const convertDayArrayToEnglish: convertDayArrayToEnglishType = (days) => {
  return days.map((day) => EN_DAYS[EVERYDAY.indexOf(day)])
}

type convertEnglishDaysToKoreanType = (days: string[]) => string[]
export const convertDayArrayEnglishToKorean: convertEnglishDaysToKoreanType = (days) => {
  return days.map((day) => EVERYDAY[EN_DAYS.indexOf(day)])
}
