import { Server } from 'http';
import { AddressInfo } from 'net';
import { testConfig } from '../../../src/app/config/test/testConfig';
import { startApp } from '../../../src/app/app';
import supertest, { SuperTest } from 'supertest';

let appServer: Server;
export let requestUtil: SuperTest<any>;

export function initHttpEnv() {
  return {
    beforeAll: beforeAll(async () => {
      await setupHttpEnv();
    }),
    afterAll: afterAll(async () => {
      await tearDownHttpEnv();
    }),
    afterEach: afterEach(() => {
      jest.restoreAllMocks();
    })
  };
}

export function setupHttpEnv() {
  const { server } = startApp();
  appServer = server;
  const serverUrl = `http://${testConfig.host}:${getServerPort(appServer)}`;
  requestUtil = supertest(serverUrl);
}

function getServerPort(appServer: Server) {
  const address = appServer.address() as AddressInfo;
  return address.port;
}

export function tearDownHttpEnv() {
  appServer.close();
}
