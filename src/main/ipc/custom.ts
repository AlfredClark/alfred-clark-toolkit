import { IpcMain } from 'electron'

/**
 * 绑定自定义监听器
 * @param ipcMain Main IPC object
 */
export function bindCustomListener(ipcMain: IpcMain): void {
  ipcMain.on('ping', () => console.log('pong'))
}
