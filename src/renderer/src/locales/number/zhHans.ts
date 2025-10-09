import { NumberFormat } from '@intlify/core-base'

const zhHans: NumberFormat = {
  currency: {
    style: 'currency',
    currency: 'CNY',
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

export default zhHans
