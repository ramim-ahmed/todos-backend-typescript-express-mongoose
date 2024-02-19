"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_route_1 = require("../app/modules/todos/todo.route");
const router = express_1.default.Router();
const routes = [
    {
        path: '/todos',
        route: todo_route_1.todosRoutes,
    },
];
routes.forEach(route => {
    router.use(route === null || route === void 0 ? void 0 : route.path, route === null || route === void 0 ? void 0 : route.route);
});
exports.default = router;
