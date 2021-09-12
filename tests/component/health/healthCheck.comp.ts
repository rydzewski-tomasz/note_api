import { initFullEnv } from '../../common/setup/initFullEnv';
import request from '../../common/util/request';
import { expectResponse } from '../../common/util/expectAddons';

describe('Component test healthCheck', () => {
  initFullEnv();

  const url = '/health';

  it('GIVEN everything ok WHEN healthCheck THEN return status 200', async () => {
    // GIVEN

    // WHEN
    const response = await request.get(url);

    // THEN
    expectResponse(response).toBeSuccess(200);
  });

});
