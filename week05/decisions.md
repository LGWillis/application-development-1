1. Why I choose these resources
- The resources I've chosen are users, tasks, and lists. They are stable domain nouns that create consistent and predictable endpoints, and they create a clear structure that lessens confusion among other developers. They model important concepts that clients will interact with and are also reusable.

2. Why I chose PUT vs PATCH
- I actually used PUT and PATCH, but chose PUT for the users and lists resources because it is idempotent and predictable. It's used for replacing entire resources, which would be updating a user's profile in my case. I chose PATCH for the tasks resource and that lets me partially update tasks, like marking them complete or incomplete.

3. How my API avoids breaking clients
- My API avoids breaking clients because the resource urls are stable and noun-based, it uses idempotent methods which allow for safe retries, JSON shapes/error formats are consistent, and changes made are additive when possible

4. A tradeoff I've made
- In order to keep my API rather simple and easily understandable, I only created 3 resources and didn't expose the user lists' entire hierarchy, which means I lost out on some flexibility for advanced client queries.