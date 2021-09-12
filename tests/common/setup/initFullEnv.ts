import { setupHttpEnv, tearDownHttpEnv } from './initHttpEnv';

export function initFullEnv() {
  return {
    beforeAll: beforeAll(async () => {
      await setup();
    }),
    afterAll: afterAll(async () => {
      await tearDown();
    }),
    afterEach: afterEach(() => {
      jest.restoreAllMocks();
    })
  };
}

async function setup() {
  setupHttpEnv();
}

async function tearDown() {
  tearDownHttpEnv();
}
