#This is a Readme.file for the filesmanager.
#Authors :- 2012Inga & Shonisani
*Files Manager API*

*Overview*

The Files Manager API is a simple RESTful API built with Node.js and Express. It provides endpoints to manage users and view database statistics. The API uses MongoDB for database operations and is configured to work with Redis for cache management.

*Features*

Status Check: Check if Redis and MongoDB are alive.
Statistics: Get the number of users and files in the database.
Create User: Add a new user to the database.
...

*Installation
Clone the repository:*


git clone https://github.com/2012Inga/alx-files_manager
Navigate to the project directory:
...

cd alx-files_manager
Install dependencies:

npm install
...
Set up environment variables:

*Create a .env file in the root directory with the following variables:*

env
Copy code

PORT=5000
DB_HOST=localhost
DB_PORT=27017
DB_DATABASE=files_manager
REDIS_HOST=localhost
REDIS_PORT=6379
Usage

*Start the server:*

npm run start-server
The server will start and listen on port 5000 by default.

*Endpoints:*

GET /status: Returns the status of Redis and MongoDB.

curl http://localhost:5000/status
GET /stats: Returns the number of users and files in the database.

...
curl http://localhost:5000/stats
POST /users: Creates a new user. Requires email and password in the request body.

...

curl -X POST http://localhost:5000/users -H "Content-Type: application/json" -d '{"email": "example@example.com", "password": "yourpassword"}'

...

*Dependencies*

...
express: Web framework for Node.js
mongodb: MongoDB driver for Node.js
redis: Redis client for Node.js
bcrypt: Password hashing library
nodemon: Tool for auto-reloading the server during development

*Contributing*

...

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

*License*
...

This project is licensed under the MIT License - see the LICENSE file for details.
