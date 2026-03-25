## 1. What problems does raw SQL create in large applications?
    - As an application gets larger, the raw SQL is going to become harder to manage. Queries are probably going to be repeated across different files, which would make the code harder to maintain/update. Raw SQL in large applications also increases the risk of errors, like incorrect queries or security issues such as SQL injection. Basically, it can make the codebase messy and harder to scale.

## 2. What is an ORM in your own words?
    - Object Relational Mapping, or ORM, is something that developers can use to interact with a database using programming language objects instead of writing SQL queries directly. Its sort of like a bridge between the database and the application.

## 3. What does an ORM replace or simplify?
    - An ORM will replace the need to write raw SQL queries manually. It simplifies cerrtain tasks, like creating, reading, or updating data. It does this by using methods and objects. It helps manage relationships between tables and also reduces repetitive code.

## 4. When would you NOT want to use an ORM?
    - I wouldn't recommend using an ORM when you need high performance or full control over complex SQL queries. ORMs may generate inefficient queries, making raw SQL is better for advanced operations.