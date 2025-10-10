import { ElectronAPI } from '@electron-toolkit/preload'
import { Config } from "../utils/config/config";

declare global {
  interface Window {
    electron: ElectronAPI
    config: Config
    api: unknown
  }
}
