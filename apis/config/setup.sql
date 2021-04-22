CREATE USER 'newTodoUser'@'%' IDENTIFIED BY 'NO3y3inTM';
GRANT ALL ON `todo-app.*` TO 'newTodoUser'@'%';
FLUSH PRIVILEGES;