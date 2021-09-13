import dotenv from 'dotenv';
import { Knex } from 'knex';
import appConfig from './appConfig';

const config = require('../../../knexfile.js');

dotenv.config();

const { NODE_ENV } = process.env;
let knexConfig: Knex.Config;

if (NODE_ENV === 'test') {
  knexConfig = config.test;
} else if (appConfig.env === 'local') {
  knexConfig = config.development;
} else {
  knexConfig = config.production;
}

export default knexConfig;