import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHead,
} from '@material-ui/core';
import TodoListItem from '../listItem/listItem';
import { useSelector } from '../../../store';
import { ITodoItem } from '../../../interfaces/Todo';
import { selectTodoList, selectStatus } from '../../../store/slices/todoSlice';


const TodoList = () => {

  const todoList:ITodoItem[] = useSelector(selectTodoList);
  const status = useSelector(selectStatus);

  return (
    <div>
      <Card>
        <CardHeader title="Todo List" />
        <CardContent>
          { status !== 'loading' && todoList.length > 0 ? 
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                  Description 
                  </TableCell>
                  <TableCell>
                  Label
                  </TableCell>
                  <TableCell>
                  Status
                  </TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { todoList.map((item:any, i: number) => (
                  <TodoListItem key={i} todoItem={item} />
                )) }
              </TableBody>
            </Table>
            : 'Your Todo List is emplty, add some Todos for yourself ;)'}
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;