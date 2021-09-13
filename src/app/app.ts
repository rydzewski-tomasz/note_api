import Koa from 'koa';
import { setupRoutes } from '../share/interfaces/http/routes/setupRoutes';
import { getConfig } from './config/appConfig';


export function startApp() {
  const { port, host, env } = getConfig();

  const app = new Koa();

  setupRoutes(app);

  const server = app.listen(port, ~~host);

  console.log(`App run in ${env} environment`);
  console.log(`Listening on ${host}:${port}`);

  return {
    server
  };
}
