import fs from 'fs'
import YAML from 'yaml'
import { join } from 'path'
import { Config } from './config'

const configFilePath = join(process.cwd(), 'conf', 'example.yaml')
const file = fs.readFileSync(configFilePath, 'utf8')
const config: Config = YAML.parse(file)
export default config
