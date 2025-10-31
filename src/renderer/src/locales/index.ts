import { createI18n } from 'vue-i18n'
import messages from './messages'
import datetimeFormats from './datetime'
import numberFormats from './number'
import { useLocale } from 'vuetify'

// 改变本地化设置
export function changeLocale(locale: string): void {
  const { current } = useLocale()
  current.value = locale
}

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
