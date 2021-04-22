module.exports = {
  HOST: 'todoappmysqlcontainer',
  USER: 'newTodoUser',
  PASSWORD: 'NO3y3inTM',
  DB: 'todo-app',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};