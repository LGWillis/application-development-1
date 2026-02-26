1. What I changed:
    - I went ahead and moved the API key authorization middleware from its original spot before the controller to after it in POST /tasks route. So in this case, createTask executed before the API check.

2. What broke:
    - Because the authorization middleware wasn't executed before the controller, a POST request that I sent still created a task, even though it didn't have the x-api-key header.

3. Why it broke:
    - The API key authorization middleware still existed in the code, but Express runs in order. So, since it was moved to after the controller, a response had already been sent before it could run. Once the response is sent, Express won't continue regular middleware execution.

4. Errors that occurred:
    - An error that I encountered was one that stated, Error: Cannot set headers after they are sent to the client. This happened because the API middleware tried to sent a 401 response after the controller had already done the same thing.