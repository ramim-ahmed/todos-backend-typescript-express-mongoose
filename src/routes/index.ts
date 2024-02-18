import express from 'express';
import { todosRoutes } from '../app/modules/todos/todo.route';
const router = express.Router();

const routes = [
  {
    path: '/todos',
    route: todosRoutes,
  },
];

routes.forEach(route => {
  router.use(route?.path, route?.route);
});

export default router;
