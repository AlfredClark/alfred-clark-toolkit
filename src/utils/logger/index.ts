import { join } from 'path'
import * as fs from 'node:fs'
import Logger from 'electron-log/main'

// 全局参数配置
const dateTimeFormat = Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Shanghai'
})
const date = new Date()
const logsDir = join(process.cwd(), 'logs')
const lofFileName = dateTimeFormat.format(date).replaceAll('/', '-').replaceAll('\\', '-') + '.log'

// 创建日志文件夹
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

// 初始化Main日志文件配置
Logger.initialize()
Logger.transports.console.level = 'info'
Logger.transports.console.format = '[{y}-{m}-{d} {h}:{i}:{s}][{level}]{scope}{text}'
Logger.transports.file.level = 'info'
Logger.transports.file.maxSize = 10485760 // 10mb
Logger.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}][{level}]{scope}{text}'
Logger.transports.file.resolvePathFn = () => join(logsDir, lofFileName)

// 常用日志方法
export default Logger
