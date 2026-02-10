Endpoint requests and responses examples

1. POST /users

Status Code: 201 Created
Example Request (http/json):

POST /users
Content-Type: application/json

{
  "name": "Luke Willis",
  "email": "luke@example.com"
}

Example Response:

{
  "id": "123",
  "name": "Luke Willis",
  "email": "luke@example.com",
  "createdAt": "2026-02-09T18:30:00Z"
}

2. GET /users/{userId}

Status Code: 200 OK
Example Request:

GET /users/123
Accept: application/json

Example Response:

{
  "id": "123",
  "name": "Luke Willis",
  "email": "luke@example.com",
  "createdAt": "2026-02-09T18:30:00Z"
}

3. PUT /users/{userId}

Status Code: 200 OK
Example Request (http/json):

PUT /users/123
Content-Type: application/json

{
  "name": "Luke W.",
  "email": "luke.w@example.com"
}

Example Response:

{
  "id": "123",
  "name": "Luke W.",
  "email": "luke.w@example.com",
  "updatedAt": "2026-02-09T19:00:00Z"
}



