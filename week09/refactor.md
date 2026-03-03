## Quality Improvements

1. Added validateUser middleware

Along with the existing validateTask middleware, I created a new validateUser middleware that validates incoming request bodies before they can reach the controller. It checks that the username and email fields, which are required, are present and formatted the way they should be. It was added to the POST and PATCH user routes. This improves quality because validation is now moved into middleware, which separates concerns, makes validation reusable, and keeps controllers clean. Before, input validation happened inside of the controller, so the controller handled validation and business logic. Now, there is middleware that lets validation occur before the controller runs and if that fails, then the an error response is returned. Controllers no longer have to handle validation.

2. Added filtering & sorting to GET /tasks

I updated the GET /tasks endpoint to be able to filter tasks by completion status, sort by title or id, and combined filtering, pagination, and sorting. This was done by altering the in-memory tasks array before pagination occurs. These changes improve quality because originally, GET /tasks only supported pagination. With the new updates, the API becomes more flexible and improves the usability for clients. So, before, the endpoint only returned paginated tasks. Now, the endpoint allows clients to filter by completion status and sort in either ascending or descending order. It also still includes pagination.

3. Implemented centralized async error handling

I refactored the controllers to throw error instead of calling next() with errors. I made an asyncHandler middleware to wrap the route handlers. The middleware catches the thrown errors and forwards them to a global error handler. I also modified the routes to wrap controller functions with asyncHandler. This improves the quality because passing error objects with next() required repetitive error handling logic within the controllers. My new structure now centralizes error handling, makes the controllers cleaner, and removes repetitve code. Before this change, each controller manually called error objects with next() when there was an error. Now, controllers throw error objects with status and code properties, then the asyncHandler forwards erros to a centralized global middleware and it formats the responses.

