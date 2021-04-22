import { createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from '../../interfaces/Todo';
import { RootState } from '../../rootReducer';
import { fetchTodos, addTodo, editTodo, deleteTodo } from '../actions/todoActions';

type TodosState = {
  status: 'loading' | 'idle';
  error: string | null;
  toDolist: ITodoItem[];
};

const initialState: TodosState = {
  toDolist: [],
  error: null,
  status: 'idle',
};

export const selectStatus = (state: RootState) => state.todo.status;
export const selectTodoList = (state: RootState) => state.todo.toDolist;

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //Fetch Todo List
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
  
    builder.addCase(fetchTodos.fulfilled, 
      (state, { payload }) => {
        state.toDolist = payload.data;
        state.status = 'idle';
      });

    builder.addCase(fetchTodos.rejected, 
      (state, { payload }) => {
        state.error = payload ? '' : '';
        state.status = 'idle';
      });

    // Add TODO
    builder.addCase(addTodo.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    
    builder.addCase(addTodo.fulfilled, 
      (state, { payload }) => {
        state.toDolist.push(payload.data);
        state.status = 'idle';
      });
  
    builder.addCase(addTodo.rejected, 
      (state, { payload }) => {
        state.error = payload ? '' : '';
        state.status = 'idle';
      });

    // Edit TODO
    builder.addCase(editTodo.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    
    builder.addCase(editTodo.fulfilled, 
      (state, { payload } ) => {
        state.toDolist = state.toDolist.map(todo => todo.id == payload.id ?
          { ...todo, label: payload.label, status: payload.status } : todo);
        state.status = 'idle';
      });
  
    builder.addCase(editTodo.rejected, 
      (state, { payload }) => {
        state.error = payload ? '' : '';
        state.status = 'idle';
      });

    // DELETE TODO
    builder.addCase(deleteTodo.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    
    builder.addCase(deleteTodo.fulfilled, 
      (state, { payload }) => {
        state.toDolist = state.toDolist.filter(todo => todo.id !== payload.id);
        state.status = 'idle';
      });
  
    builder.addCase(deleteTodo.rejected, 
      (state, { payload }) => {
        state.error = payload ? '' : '';
        state.status = 'idle';
      });
  },
});

export const todoReducer = todoSlice.reducer;
export default todoSlice;