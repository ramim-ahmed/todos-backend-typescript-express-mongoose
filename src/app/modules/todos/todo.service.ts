import { ITodos } from './todo.interface';
import { Todos } from './todo.model';

const createTodo = async (payload: ITodos): Promise<ITodos> => {
  const newTodos = new Todos(payload);
  const result = await newTodos.save();
  return result;
};

const getAllTodos = async (): Promise<ITodos[]> => {
  const result = await Todos.find({});
  return result;
};

const getTodo = async (payload: string): Promise<ITodos | null> => {
  const result = await Todos.findOne({ _id: payload });
  return result;
};

const updateTodo = async (payload: string, updatedContent: ITodos) => {
  const result = await Todos.updateOne({ _id: payload }, updatedContent);
  return result;
};

const deleteTodo = async (payload: string) => {
  const result = await Todos.deleteOne({ _id: payload });
  return result;
};
export const todosService = {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
