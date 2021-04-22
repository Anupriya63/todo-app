module.exports = app => {
  const todos = require('../controllers/todo.controller');

  var router = require('express').Router();

  // Create a new TODO
  router.post('/', todos.create);

  // Retrieve all TODOs
  router.get('/', todos.findAll);

  // Retrieve a single TODO with id
  router.get('/:id', todos.findOne);

  // Update a TODO with id
  router.put('/:id', todos.update);

  // Delete a TODO with id
  router.delete('/:id', todos.delete);

  app.use('/todo', router);
};