import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  TableRow,
  TableCell,
  SvgIcon
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ITodoItem, IEditTodo, IDeleteTodo } from '../../../interfaces/Todo';
import { editTodo, deleteTodo } from '../../../store/actions/todoActions';
import { useDispatch } from 'react-redux';

export interface TodoListProps {
  todoItem: ITodoItem
}

enum Status {
  'N/A' = 'N/A',
  Pending = 'Pending',
  InProgress = 'InProgress',
  Complete = 'Complete'
}

const TodoListItem: React.FC<TodoListProps> = ({todoItem}) => {
  const [status, setStatus] = React.useState(todoItem.status || 'NA' );
  const [label, setlabel] = React.useState(todoItem.label || '');
  const [disableEdit, setdisableEdit] = React.useState(true);
  const dispatch = useDispatch();

  const statusOptions = Object.keys(Status);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleEdit = () => {
    setdisableEdit(false);
  };

  const handleSave = () => {
    setdisableEdit(true);
    const reqdata: IEditTodo = {
      label: label,
      status: status,
      id: todoItem.id
    };
    dispatch(editTodo(reqdata));
  };

  const handleDelete = () => {
    const reqdata: IDeleteTodo = {
      id: todoItem.id
    };
    dispatch(deleteTodo(reqdata));
  };

  return(
    <TableRow>
      <TableCell>
        {todoItem.description}
      </TableCell>  
      <TableCell>
        <TextField
          value={label}
          onChange={e => setlabel(e.target.value)}
          placeholder="Enter label"
          disabled = {disableEdit}/>
      </TableCell>
      <TableCell>
        <select value={status} onChange={handleChange} disabled = {disableEdit}>
          {statusOptions.map((i, key) => (
            <option key={i} value={statusOptions[key]}>
              { statusOptions[key] }
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell>
        <Button
          color='primary'
          onClick={handleDelete}>
          <SvgIcon fontSize="small">
            <DeleteIcon />
          </SvgIcon>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          color='primary'
          onClick={handleEdit}>
          <SvgIcon fontSize="small">
            <EditIcon />
          </SvgIcon>
        </Button>
      </TableCell>
      <TableCell>
        { !disableEdit ? <Button
          color='primary'
          onClick={handleSave}>
          Save
        </Button> : ''}
      </TableCell>
    </TableRow>
  );
};

TodoListItem.propTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  todoItem: PropTypes.object.isRequired
};

export default TodoListItem;
