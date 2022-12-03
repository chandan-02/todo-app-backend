# Installation & Setup

    git clone
    npm install
if local then use http://localhost:5000/api as base_url or https://todo-app-id2e.onrender.com/api

 # Available routes
	- Create Todo
     POST base_url/todo
     
    - Get All todos
      GET base_url/todos
      
    - Get todo by id (Here id is mongo's _id of a document)
      GET base_url/todo/:id
      
    - Mark todo as done 
      POST base_url/todo/:todoid/done
      
    - Delete todo by id 
      DELETE base_url/todo/:todoid/delete
 # [Postman link](https://elements.getpostman.com/redirect?entityId=17605492-724bf801-1e7f-4913-a1ea-cd11407f9d56&entityType=collection)
