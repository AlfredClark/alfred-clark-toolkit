import config from '../config'
// import Logger from '../logger'
// import { spawn } from 'node:child_process'

export async function startBackend(): Promise<string> {
  return new Promise((resolve) => {
    // // 创建子进程，运行 Python 脚本
    // const pythonProcess = spawn('conda', ['-V'])
    //
    // // 将 Python 脚本的输出打印出来
    // pythonProcess.stdout.on('data', (data) => {
    //   Logger.info(`Python script output: ${data}`)
    // })
    //
    // // 处理 Python 脚本的错误输出
    // pythonProcess.stderr.on('data', (data) => {
    //   Logger.error(`Python script error: ${data}`)
    // })
    //
    // // 处理 Python 脚本的退出事件
    // pythonProcess.on('close', (code) => {
    //   Logger.warn(`Python script exited with code ${code}`)
    // })
    resolve('http://' + config.backend.host + ':' + config.backend.port)
  })
}
