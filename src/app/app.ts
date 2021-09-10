import Koa from 'koa';
import { setupRoutes } from '../share/interfaces/http/routes/setupRoutes';


export function startApp() {
  const app = new Koa();

  setupRoutes(app);

  app.listen(3000, 'localhost');

  console.log('Listening on %s:%s', 'localhost', '3000');
}
