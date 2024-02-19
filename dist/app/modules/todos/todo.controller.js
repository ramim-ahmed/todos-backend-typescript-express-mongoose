"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosController = void 0;
const todo_service_1 = require("./todo.service");
const http_status_1 = __importDefault(require("http-status"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const todo = yield todo_service_1.todosService.createTodo(data);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'todo created successfully!!',
            data: todo,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'todo created failed!!',
            error,
        });
    }
});
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_service_1.todosService.getAllTodos();
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'todos retrived successfully!!',
            data: todos,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'todo retrived failed!!',
            error,
        });
    }
});
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todo_service_1.todosService.getTodo(id);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'todo retrived successfully!!',
            data: todo,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'todo retrived failed!!',
            error,
        });
    }
});
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const todo = yield todo_service_1.todosService.updateTodo(id, updatedData);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'todo udpated successfully!!',
            data: todo,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'todo updated failed!!',
            error,
        });
    }
});
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todo_service_1.todosService.deleteTodo(id);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'todo deleted successfully!!',
            data: todo,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'todo deleted failed!!',
            error,
        });
    }
});
exports.todosController = {
    createTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
};
