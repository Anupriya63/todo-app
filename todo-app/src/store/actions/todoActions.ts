import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest, postRequest, putRequest, deleteRequest } from '../../services/todo/index';
import { IAddTodo, IEditTodo, IDeleteTodo } from '../../interfaces/Todo';

export const fetchTodos = createAsyncThunk(
  '/getTodos', 
  async () => {
    const path = '/todo';
    try {
      return await getRequest(path);
    } catch (error) {
      throw new Error('Todo List can not be fetched');
    }
  }
);

export const addTodo = createAsyncThunk(
  '/addTodo',
  async (requestBody: IAddTodo) => {
    const path = '/todo';
    try {
      return await postRequest(path, requestBody);
    } catch (error) {
      throw new Error('Todo can not be inserted');
    }
  }
);

export const editTodo = createAsyncThunk(
  '/editTodo',
  async (requestBody: IEditTodo) => {
    const id: number = requestBody.id;
    const path = '/todo/' + id;
    const body = {
      label: requestBody.label? requestBody.label: null,
      status: requestBody.status? requestBody.status: null,
    };
    try {
      await putRequest(path, body);
      return requestBody;
    } catch (error) {
      throw new Error('Todo can not be updated');
    }
  }
);

export const deleteTodo = createAsyncThunk(
  '/deleteTodo',
  async (requestBody: IDeleteTodo) => {
    const id: number = requestBody.id;
    const path = '/todo/' + id;
    try {
      await deleteRequest(path);
      return requestBody;
    } catch (error) {
      throw new Error('Todo can not be deleted');
    }
  }
);