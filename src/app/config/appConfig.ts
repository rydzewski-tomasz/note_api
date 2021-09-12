import dotenv from 'dotenv';
import { testConfig } from './test/testConfig';
import { defaultConfig } from './default/defaultConfig';

dotenv.config();

const { NODE_ENV } = process.env;

export interface AppConfig {
  env: string;
  port: string;
  host: string;
  isTest: boolean;
}

let appConfig: AppConfig;

if (NODE_ENV === 'test') {
  appConfig = testConfig;
} else {
  appConfig = defaultConfig;
}

export function getConfig(): AppConfig {
  return appConfig;
}

export default appConfig;
