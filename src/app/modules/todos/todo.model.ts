import { Schema, model } from 'mongoose';
import { ITodos } from './todo.interface';

const todosSchema = new Schema<ITodos>(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Todos = model<ITodos>('todo', todosSchema);
