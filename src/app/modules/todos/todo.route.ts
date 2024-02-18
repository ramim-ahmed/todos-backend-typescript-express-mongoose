import express from 'express';
import { todosController } from './todo.controller';
const router = express.Router();
router.get('/', todosController.getAllTodos);
router.post('/create-todo', todosController.createTodo);
router.get('/:id', todosController.getTodo);
router.patch('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);
export const todosRoutes = router;
