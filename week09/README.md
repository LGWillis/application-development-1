## 1. Project Overview

This API is a RESTful backend service that lets clients manage tasks and users. It allows for creating, reading, updating, and deleting tasks/user records all while maintaining clear API contracts. It's target users are frontend developers who will be building task managing applications and teams needing an API for user/task data. The core resources include Users and Tasks. Users represent those who can be assigned tasks and Tasks represent items or to-dos that users can create, update, and track.

## 2. Setup Instructions

Node Version - Node.js should be installed, preferrably version 18+

Install Dependencies - Run npm install from the week08 directory

Start the Server - Run npm start from the week08 directory. The API will start on the port 3000 or whatever is defined in process.env.PORT

Environment Variables = No variables required for basic usage

## 3. API Overview

| Method | Endpoint   | Description                  |
| ------ | ---------- | ---------------------------- |
| GET    | /users     | Retrieve all users           |
| GET    | /users/:id | Retrieve a single user by ID |
| POST   | /users     | Create a new user            |
| PATCH  | /users/:id | Partially update a user      |
| DELETE | /users/:id | Delete a user                |
| GET    | /tasks     | Retrieve all tasks           |
| GET    | /tasks/:id | Retrieve a single task by ID |
| POST   | /tasks     | Create a new task            |
| PATCH  | /tasks/:id | Partially update a task      |
| DELETE | /tasks/:id | Delete a task                |


## 4. Example Requests

Successful POST - Create task:
    Request:
        POST /tasks
        Content-Type: application/json
        x-api-key: 12345

        {
        "title": "Finish this week's work",
        "completed": false
        }
    Response:
    {
        "id": 1,
        "title": "Finish this week's work",
        "completed": false
    }

    Status Code: 201 Created

Validation Error - Missing required field:
    Request:
        POST /tasks
        Content-Type: application/json
        x-api-key: 12345

        {
        "completed": false
        }
    Response:
    {
        "error": {
            "code": "INVALID_INPUT",
            "message": "Title is required"
        }
    }

    Status Code: 400 Bad Request

Unauthorized Error - Incorrect API Key
    Request:
    POST /tasks
    Content-Type: application/json
    x-api-key: wrongkeytest

    {
        "title": "Test unauthorized request"
    }
    Response:
    {
        "error": {
            "code": "UNAUTHORIZED",
            "message": "API key missing or invalid"
        }
    }

    Status Code: 401 Unauthorized