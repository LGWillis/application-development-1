## 1. What this database represents:

The database that I have created, task_management_db, represents a task management system. The database stores user information, their projects, and the tasks that go along with those projects. What this does is allow users to see who each project belongs to and what tasks need to be done for each project. Each user can have multiple projects and each project can have multiple tasks associated with them.

## 2. Three tables in the database:

Users - This table stores user information like id, name, and email
Projects - This table stores project information like id, name, description, and user_id
Tasks - This table stores information about tasks like id, title, status, and project_id

## 3. Relationships between tables:

Each user can have multiple projects, each project can have multiple tasks. 

## 4. Primary Key Explanation

Primary keys are columns that uniquely identify the rows within a table and they cannot be NULL. In this case, users.id will identify each user and it is a primary key.

## 5. Foreign Key Explantion

Foreign keys are the columns in a table that refrence the primary key in a seperate table. They create relationships between tables and are essiential for referential integrity. In this case, a foreign key would be projects.user_id because it references users.id, which links the project to its owner.