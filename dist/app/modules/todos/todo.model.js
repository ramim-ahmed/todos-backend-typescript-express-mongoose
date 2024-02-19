"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todos = void 0;
const mongoose_1 = require("mongoose");
const todosSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Todos = (0, mongoose_1.model)('todo', todosSchema);
