import Router, { Spec } from 'koa-joi-router';
import { healthHandler } from './healthHandler';

const router = Router();

router.route(<Spec> {
  handler: healthHandler,
  method: 'get',
  path: '/health'
});

export default router;
