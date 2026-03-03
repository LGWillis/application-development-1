## Users Resource

1. GET /users
Description: Retrieve all users
Request: No body required
Response:
[
  {
    "id": 1,
    "name": "Abbie",
    "email": "abbie@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com"
  }
]
Status Code: 200 OK

2. GET /users/:id
Description: Retrieve a single user by ID
Request: URL parameter id
Response:
{
  "id": 1,
  "name": "Bob",
  "email": "bob@example.com"
}
Status Code: 200 OK

Error Responses:
{
  "error": {
    "code": "NOT_FOUND",
    "message": "User not found"
  }
}
Status Code: 404 Not Found

3. POST /users
Description: Create new user
Request:
{
  "name": "Steve",
  "email": "steve@example.com"
}

Response:
{
  "id": 3,
  "name": "Steve",
  "email": "steve@example.com"
}
Status Code: 201 Created

Error responses:
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Name and email required"
  }
}
Status Code: 400 Bad Request

4. PATCH /users/:id
Description: Partially update a user.
Request:
{
  "email": "newabbie@example.com"
}

Response:
{
  "id": 1,
  "name": "Abbie",
  "email": "newabbie@example.com"
}
Status Code: 200 OK

Error responses: Same as GET /users/:id

5. DELETE /users/:id
Description: Delete user
Response: No body
Status Code: 204 No Content
Error Responses: Same as GET /users/:id

## Tasks Resource

1. GET /tasks
Description: Retrieve all tasks
Request: Optional query parameters for pagination: ?page=1&limit=10
Response:
{
  "data": [
    {
      "id": 1,
      "title": "Finish assignment",
      "completed": false
    },
    {
      "id": 2,
      "title": "Update README",
      "completed": true
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 2
  }
}
Status Code: 200 OK

2. GET /tasks/:id
Description: Retrieve a single task by ID
Response:
{
  "id": 1,
  "title": "Finish assignment",
  "completed": false
}
Status Code: 200 OK

Error Responses:
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Task not found"
  }
}
Status Code: 404 Not Found

3. POST /tasks
Description: Create a new task
Request:
{
  "title": "Create API",
  "completed": false
}

Response:
{
  "id": 3,
  "title": "Create API",
  "completed": false
}
Status Code: 201 Created

Error Response: Missing title
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Title is required"
  }
}
Status Code: 400 Bad Request

Error Response: Unauthorized API key
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "API key missing or invalid"
  }
}
Status Code: 401 Unauthorized

4. PATCH /tasks/:id
Description: Partially update a task
Request:
{
  "completed": true
}

Response:
{
  "id": 1,
  "title": "Finish assignment",
  "completed": true
}
Status Code: 200 OK

Error Responses: Same as GET /tasks/:id and POST /tasks (401 + 400)

5. DELETE /tasks/:id
Description: Delete a task
Response: No body
Status Code: 204 No Content
Error Responses: Same as GET /tasks/:id