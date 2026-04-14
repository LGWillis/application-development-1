CREATE DATABASE recipe_app;
USE recipe_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    password_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(100),
    description TEXT,
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    name VARCHAR(100),
    quantity VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);