import Koa from 'koa';
import healthRouter from '../../../../health/interfaces/http/healthRouter';

export function setupRoutes(app: Koa) {
  app.use(healthRouter.middleware());
}
