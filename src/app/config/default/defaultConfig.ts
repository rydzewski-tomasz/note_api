import { AppConfig } from '../appConfig';
import dotenv from 'dotenv';

dotenv.config();

const {
  ENV,
  PORT,
  HOST,
} = process.env;

export const defaultConfig: AppConfig = {
  env: ENV || 'local',
  port: PORT || '3000',
  host: HOST || 'localhost',
  isTest: false
};
