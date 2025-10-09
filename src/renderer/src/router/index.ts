import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@renderer/view/HomeView.vue'

// 路由规则
const routes = [{ path: '/', component: HomeView }]

// 创建路由
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

// 导出路由
export default router
