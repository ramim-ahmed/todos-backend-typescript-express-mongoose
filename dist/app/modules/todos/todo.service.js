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
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosService = void 0;
const todo_model_1 = require("./todo.model");
const createTodo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodos = new todo_model_1.Todos(payload);
    const result = yield newTodos.save();
    return result;
});
const getAllTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todo_model_1.Todos.find({});
    return result;
});
const getTodo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todo_model_1.Todos.findOne({ _id: payload });
    return result;
});
const updateTodo = (payload, updatedContent) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todo_model_1.Todos.updateOne({ _id: payload }, updatedContent);
    return result;
});
const deleteTodo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todo_model_1.Todos.deleteOne({ _id: payload });
    return result;
});
exports.todosService = {
    createTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
};
