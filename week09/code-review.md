1. What parts of your code were hardest to read?

At first, my tasks.controllers.js file was probably the hardest to read. It combined things like validation, building paginated responses, and checking for duplicate titles. To me, this made the functions harder to follow. The endpoints responsible for updating also had nested conditionals that slowed down attempts to read the code. However, by splitting validation into middleware, I was able to improve the readability.

2. Where did you duplicate logic?

Prior to the changes I made, users and tasks.controllers.js had similar patterns for certain logic. I reduced duplication when I moved validation logic into its own middleware and centralized error handling.

3. What naming improvements did you make?

I altered variables to clarify what they represented and standardized error codes so they all were capitalized and included underscores.

4. What documentation was missing before?

Before making some changes, API request and response examples weren't complete, error codes and expected HTTP statuses were incomplete and there wasn't any README file for instructions.

5. If another developer inherited this API, what would confuse them?

Initially, developers would have been confused about the validation logic being inside the controllers, the JSON shape to expect on failures, and some function names that didn't seem as if they modifeed or fetched data. However, I believe I can say that after my changes, developers shouldn't be confused about my API.