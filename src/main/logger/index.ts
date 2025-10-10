import { join } from 'path'
import * as fs from 'node:fs'
import logger from 'electron-log/main'

// 全局参数配置
const dateTimeFormat = Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Shanghai'
})
const date = new Date()
const logsDir = './logs'

// 创建日志文件夹
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

// 初始化日志文件配置
logger.initialize()
logger.transports.file.level = 'info'
logger.transports.file.maxSize = 1002430
logger.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}'
logger.transports.file.resolvePathFn = () =>
  join(logsDir, dateTimeFormat.format(date).replaceAll('/', '-').replaceAll('\\', '-') + '.log')

// 常用日志方法
export default {
  info(param: string) {
    logger.info(param)
  },
  warn(param: string) {
    logger.warn(param)
  },
  error(param: string) {
    logger.error(param)
  },
  debug(param: string) {
    logger.debug(param)
  },
  verbose(param: string) {
    logger.verbose(param)
  },
  silly(param: string) {
    logger.silly(param)
  }
}
