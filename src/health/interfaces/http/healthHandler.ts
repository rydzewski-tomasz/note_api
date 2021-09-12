import { Context, Next } from 'koa';
import httpResponse from '../../../share/interfaces/http/httpResponse';
import { healthCheckUseCase } from '../../usecases/healthCheckUseCase';

export async function healthHandler(ctx: Context, _: Next) {
  const result = await healthCheckUseCase();

  if (result.isValid) {
    httpResponse(ctx).createSuccessResponse(200);
  } else {
    httpResponse(ctx).createErrorResponse(503);
  }
}
