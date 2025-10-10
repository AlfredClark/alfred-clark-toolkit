import './assets/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from '@renderer/router'
import i18n from '@renderer/locales'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'
import themes from '@renderer/themes'
import { mdi, aliases } from 'vuetify/iconsets/mdi'

// 创建vuetify插件对象
const vuetify = createVuetify({
  components,
  directives,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }) // i18n适配器
  },
  theme: {
    defaultTheme: 'light',
    themes
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

// 创建Pinia
const pinia = createPinia()
// 使用持久化插件
pinia.use(piniaPluginPersistedstate)

// 创建应用
const app = createApp(App)
// 使用插件
app.use(i18n)
app.use(pinia)
app.use(router)
app.use(vuetify)
// 挂载应用
app.mount('#app')
