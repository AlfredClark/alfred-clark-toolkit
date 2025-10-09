import { NumberFormat } from '@intlify/core-base'

const en: NumberFormat = {
  currency: {
    style: 'currency',
    currency: 'USD',
    notation: 'standard'
  },
  decimal: {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  },
  percent: {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false
  }
}

export default en
