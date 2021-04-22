# Web Developer Assignment B

## Task Overview

- Create a TODO application using ReactJS and any backend programming language as REST API web server
- Use Docker to package the REST API web server
- Use MySQL to store the TODOs data

## Instructions

### Folder/file structure

- Create 2 folders
  - 'todo-app' to store all front-end source codes
  - 'apis' to store all backend api source codes
- Create 'Dockerfile' and 'docker-compose.yml' that will be used to package and run the backend api and MySQL db
- You may refer to the 'object-schemas.yml' file as a reference for the basic TODO objects, but you can add/use any object or data that you see fit!

### Frontend:

- Using ReactJS, create a front-end for the TODO app with the following basic features:
  - List all tasks
  - Add task
  - Update/Edit task
    - Update task details
    - Set status to complete
  - Delete task

### Backend:

- Create a Dockerized REST API server using any backend programming language
- Create a Dockerized DB server using MySQL
- Connect the API and DB servers

## Expected Results

- Dynata should be able to run the dockerized applications by just running:
  '''bash
  docker-compose up -d --build
  '''
- Assignment should produce 2 Docker images:
  - 1 image for the API web server
  - 1 image for the DB server
- Assignment should produce 2 running instances:
  - 1 instance for the API web server
  - 1 instance for the DB server
- Front-end UI should be able to call APIs from the running API docker instance
- Tasks should be stored in MySQL and would be able to be retrieved when page is refreshed
