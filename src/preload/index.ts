import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// 渲染器的自定义API
const api = {}

// 仅当启用了上下文隔离时，才使用“contextBridge”将Electron API暴露给渲染器，否则只需添加到DOM全局。
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
