import ipc from './ipc'
import Logger from '../utils/logger'
import { join } from 'path'
import { app, shell, BrowserWindow, screen, ipcMain } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { startBackend } from '../utils/backend'

/**
 * 创建窗口
 * @return BrowserWindow 窗口对象
 */
function createWindow(): BrowserWindow {
  // 获得主显示器分辨率并设置初始窗口大小(默认采用黄金比例)
  const width = Math.floor(screen.getPrimaryDisplay().workAreaSize.width * 0.618)
  const height = Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.618)

  // 配置最小窗口大小
  const minWidth = Math.floor(screen.getPrimaryDisplay().workAreaSize.width / 2)
  const minHeight = Math.floor(screen.getPrimaryDisplay().workAreaSize.height / 2)

  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    minWidth: minWidth,
    minHeight: minHeight,
    show: false,
    frame: false,
    center: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // 窗口加载完成后显示
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  // 窗口打开事件处理
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url).then(() => {
      Logger.scope('Main').info('Window Open TO: ' + details.url)
    })
    return { action: 'deny' }
  })

  // 基于electronic-vite-cli的渲染器HMR
  // 加载用于开发的远程URL或用于生产的本地html文件
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']).then(() => {
      Logger.scope('Main').info('Window loadURL: ' + process.env['ELECTRON_RENDERER_URL'])
    })
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html')).then(() => {
      Logger.scope('Main').info('Window loadURL: ' + '../renderer/index.html')
    })
  }

  //允许跨域请求1
  mainWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
    callback({ requestHeaders: { Origin: '*', ...details.requestHeaders } })
  })
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        'Access-Control-Allow-Origin': ['*'],
        ...details.responseHeaders
      }
    })
  })

  // 返回窗口对象，便于后续操作
  return mainWindow
}

// 当Electron完成初始化并准备创建浏览器窗口时，将调用此方法
// 某些API只能在此事件发生后使用
app.whenReady().then(() => {
  // 为窗口设置应用程序用户模型ID
  electronApp.setAppUserModelId('alfred.clark.toolkit')

  // 在开发中默认按F12打开或关闭DevTools，在生产中忽略Command/Ctrl+R
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // 绑定自定义IPC监听器
  ipc.bindCustomListener(ipcMain)

  // 创建主窗口
  const mainWindow = createWindow()

  // 绑定窗口监听器
  ipc.bindWindowListener(ipcMain, mainWindow)

  startBackend().then((value) => {
    // CSP处理
    mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
      callback({
        responseHeaders: {
          'Access-Control-Allow-Origin': ['*'],
          'Content-Security-Policy': ["connect-src 'self' " + value],
          ...details.responseHeaders
        }
      })
    })
  })

  // 程序激活时创建窗口
  app.on('activate', function () {
    // 在macOS上，当单击dock图标并且没有其他打开的窗口时，通常会在应用程序中重新创建一个窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 关闭所有窗口后退出，macOS除外；在那里，应用程序及其菜单栏通常会保持活动状态，直到用户使用Cmd+Q明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
