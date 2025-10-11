import { defineStore } from 'pinia'

// 定义存储库
export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      config: {
        ...window.config
      }
    }
  },
  actions: {},
  persist: {
    storage: localStorage
  }
})
