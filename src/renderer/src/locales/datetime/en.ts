import { DateTimeFormat } from '@intlify/core-base'

const en: DateTimeFormat = {
  short: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false
  },
  long: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    hour12: false
  }
}

export default en
