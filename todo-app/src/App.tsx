import React from 'react';
import AddTodoForm from './components/todo/form/form';
import TodoList from './components/todo/list/list';

const App = () => {
  return (
    <>
      <AddTodoForm/>
      <TodoList/>
    </>
  );
};

export default App;
