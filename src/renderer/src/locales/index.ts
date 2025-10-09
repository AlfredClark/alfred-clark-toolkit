import { createI18n } from 'vue-i18n'
import messages from './messages'
import datetimeFormats from './datetime'
import numberFormats from './number'

// 创建i18n对象
const i18n = createI18n({
  legacy: false,
  locale: 'zhHans',
  fallbackLocale: 'en',
  globalInjection: true,
  datetimeFormats,
  numberFormats,
  messages
})

// 导出i18n
export default i18n
