"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoutes = void 0;
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("./todo.controller");
const router = express_1.default.Router();
router.get('/', todo_controller_1.todosController.getAllTodos);
router.post('/create-todo', todo_controller_1.todosController.createTodo);
router.get('/:id', todo_controller_1.todosController.getTodo);
router.patch('/:id', todo_controller_1.todosController.updateTodo);
router.delete('/:id', todo_controller_1.todosController.deleteTodo);
exports.todosRoutes = router;
