import { Context, Next } from 'koa';
import httpResponse from '../../../share/interfaces/http/httpResponse';

export async function healthHandler(ctx: Context, _: Next) {
  httpResponse(ctx).createSuccessResponse(200);
}
