### Steps to run the project

### Backend 

In terminal start the backend and mysql server docker containers by running the command below -

    > docker-compose up -d --build

Stop backend and mysql containers

    > docker-compose down

### Frontend 
   
   To run frontend app && install node modules (only First time) -
    
    > yarn build-client

  To run frontend app 
    
    > yarn start-client


### Ports - Just a note, doesn't need any action.

I have tried to use less common ports to avoid overlapping. I could have just ask to set at run time. But for simplicity I just chose less comman ports -

Fronted React app will run at http://localhost:3006/ 
Banckend Node server at http://localhost:5006/ 
Mysql server will run at 3309 


### TODO

1) TEST CASES
2) Add Pagination component
3) Add limit in backend findAll to support pagination
