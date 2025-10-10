export interface Config {
  backend: {
    host: string
    port: number
  }
}

export const defaultConfig: Config = {
  backend: {
    host: 'localhost',
    port: 8000
  }
}
