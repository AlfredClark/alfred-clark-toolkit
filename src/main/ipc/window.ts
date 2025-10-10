import { BrowserWindow, IpcMain } from 'electron'

/**
 * 绑定窗口监听
 * @param ipcMain Main IPC object
 * @param mainWindow Main window object
 */
export function bindWindowListener(ipcMain: IpcMain, mainWindow: BrowserWindow): void {
  // 最小化事件
  ipcMain.on('minimize', () => mainWindow.minimize())
  // 最大化事件
  ipcMain.on('maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  })
  // 退出事件
  ipcMain.on('close', () => mainWindow.close())
}
