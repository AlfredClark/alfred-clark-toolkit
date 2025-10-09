import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 创建vuetify插件对象
const vuetify = createVuetify({
  components,
  directives
})

// 创建应用
createApp(App).use(vuetify).mount('#app')
