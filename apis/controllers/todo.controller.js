const db = require('../models');
const Todo= db.todos;
const Op = db.Sequelize.Op;

// Create and Save a new TODO
exports.create = (req, res) => {
  // Validate request
  if (!req.body.description) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  const todo = {
    label: req.body.label,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    status: req.body.status,
  };

  Todo.create(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the TODO.'
      });
    });

};

// Retrieve all TODOs from the database.
exports.findAll = (req, res) => {

    Todo.findAll({
      order: [ ['createdAt',  'DESC'] ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving TODO.'
        });
    });
};

// Find a single TODO with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error retrieving TODO with id=' + id
        });
    });
};

// Update a TODO by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Todo.update(req.body, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: 'TODO was updated successfully.'
        });
        } else {
        res.send({
            message: `Cannot update TODO with id=${id}. Maybe TODO was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: 'Error updating Tutorial with id=' + id
        });
    });
};

// Delete a TODO with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'TODO was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete TODO with id=${id}. Maybe TODO was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete TODO with id=' + id
      });
    });
};

