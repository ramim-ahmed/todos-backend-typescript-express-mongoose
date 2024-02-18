import { Request, Response } from 'express';
import { todosService } from './todo.service';
import httpStatus from 'http-status';

const createTodo = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const todo = await todosService.createTodo(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'todo created successfully!!',
      data: todo,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'todo created failed!!',
      error,
    });
  }
};

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todosService.getAllTodos();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'todos retrived successfully!!',
      data: todos,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'todo retrived failed!!',
      error,
    });
  }
};

const getTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todosService.getTodo(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'todo retrived successfully!!',
      data: todo,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'todo retrived failed!!',
      error,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const todo = await todosService.updateTodo(id, updatedData);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'todo udpated successfully!!',
      data: todo,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'todo updated failed!!',
      error,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todosService.deleteTodo(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'todo deleted successfully!!',
      data: todo,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'todo deleted failed!!',
      error,
    });
  }
};
export const todosController = {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
