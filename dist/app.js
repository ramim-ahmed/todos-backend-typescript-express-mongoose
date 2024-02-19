"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const app = (0, express_1.default)();
const routes_1 = __importDefault(require("./routes"));
// middleares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// applicationt routes
app.get('/', (req, res) => {
    res.status(http_status_1.default.OK).json({
        message: 'Server running on port: 5000',
    });
});
app.use('/api/v1', routes_1.default);
// handle not found routes
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'not found !!',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'api not found!!',
            },
        ],
    });
    next();
});
exports.default = app;
