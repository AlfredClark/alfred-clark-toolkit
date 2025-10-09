import { defineStore } from 'pinia'

// 定义存储库
export const useGlobalStore = defineStore('global', {
  state() {
    return {}
  },
  actions: {},
  persist: {
    storage: localStorage
  }
})
