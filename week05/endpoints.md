Resource: users
GET /users
- Purpose: Retrieve collection of all users
- Returns: 200 OK

GET /users/{userId}
- Purpose: Retrieve single user
- Returns: 200 OK

POST /users
- Purpose: Create new user
- Returns: 201 Created

PUT /users/{userId}
- Purpose: Replace existing user's data
- Returns: 204 No Content

DELETE /users/{userId}
- Purpose: Delete a user
- Returns: 204 No Content


Resource: tasks
GET /tasks
- Purpose: Retrieve collection of all tasks
- Returns: 200 OK

GET /tasks/{tasksId}
- Purpose: Retrieve a single task
- Returns: 200 OK

POST /tasks
- Purpose: Create new task
- Returns: 201 Created

PATCH /tasks/{taskId}
- Purpose: Partially update a task
- Returns: 200 OK

DELETE /tasks/{taskId}
- Purpose: Delete a task
- Returns: 204 No Content


Resource: lists
GET /lists
- Purpose: Retrieve collection of all lists
- Returns: 200 OK

GET /lists/{listId}
- Purpose: Retrieve a single list
- Returns: 200 OK

POST /lists
- Purpose: Create new list
- Returns: 201 Created

PUT /lists/{listId}
- Purpose: Replace an existing list’s data
- Returns: 200 OK

DELETE /lists/{listId}
- Purpose: Delete a list
- Returns: 204 No Content