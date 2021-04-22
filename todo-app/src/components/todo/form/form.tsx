import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { useStyles } from './form.style';
import { useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from '../../../store/actions/todoActions';

const AddTodoForm = () => {
  const classes = useStyles();
  const [todoItem, setTodoItem] = useState('');
  const dispatch = useDispatch();

  const handleAdd = async (e: any) => {
    e.preventDefault();
    const reqData = {
      description: todoItem
    };
    dispatch(addTodo(reqData));
    setTodoItem('');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appbar}
        position="sticky"
      >
        <Toolbar className={classes.toolbar}>
          <form
            className={classes.form}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
              >

              </Grid>
              <Grid
                item
                lg={6}
                sm={12}
              >
                <TextField
                  className={classes.queryField}
                  InputProps={{
                    classes: { input: classes.input},
                  }}
                  onChange={(e) => setTodoItem(e.target.value)}
                  placeholder='Enter Todo item'
                  value={todoItem}
                  variant='outlined'
                />
                <Button
                  color='default'
                  className={classes.addButton}
                  onClick={handleAdd}
                  type='submit'
                  variant='contained'
                >
                    Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AddTodoForm;