import config from '../config'

export async function startBackend(): Promise<string> {
  return new Promise((resolve) => {
    resolve('http://' + config.backend.host + ':' + config.backend.port)
  })
}
