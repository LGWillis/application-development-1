CREATE DATABASE task_management_db;

USE task_management_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);


INSERT INTO users (name, email)
VALUES
('Luke Willis', 'luke@example.com'),
('Carter Clark', 'carter@example.com'),
('Don Shibetta', 'don@example.com');

INSERT INTO projects (name, description, user_id)
VALUES
('Golf Practice', 'Practice chipping', 1),
('App Dev 1', 'Do schoolwork', 2),
('Study Session', 'Study for marketing test', 3);

INSERT INTO tasks (title, status, project_id)
VALUES
('Hit ten balls with wedge', 'In Progress', 1),
('Ten full wedge shots', 'Not Started', 1),
('Create database', 'In Progress', 2),
('Run queries', 'Not Started', 2),
('Research marketing tactics', 'Complete', 3);

SELECT * FROM users;
SELECT * FROM projects;
SELECT * FROM tasks;

SELECT tasks.title, tasks.status, projects.name AS project_name
FROM tasks
JOIN projects ON tasks.project_id = projects.id;

SELECT projects.name AS project_name, users.name AS user_name
FROM projects
JOIN users ON projects.user_id = users.id;

SELECT *
FROM tasks
WHERE status = 'Complete';

SELECT *
FROM tasks
ORDER BY title ASC;


