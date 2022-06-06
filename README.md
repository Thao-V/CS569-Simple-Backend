# CS569 - Simple Backend App
## How to run
* npm i
* npm start
## Auth Api
* Login: POST http://localhost:3000/auth/login
* Add a new user: POST http://localhost:3000/auth/add
## Data Api
* Get all data: GET http://localhost:3000/data 
* Get a specific data by id: GET http://localhost:3000/data/:id
* Create a data with body: POST http://localhost:3000/data
* Update a data with body: PUT http://localhost:3000/data
* Delete a data with body: DELETE http://localhost:3000/data
## Alter the data structure in file controllers/data.js