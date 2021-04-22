module.exports = (sequelize, Sequelize) => {
  const TodoList = sequelize.define('todo', {
    label: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    start: {
      type: Sequelize.DATE
    },
    end: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return TodoList;
};