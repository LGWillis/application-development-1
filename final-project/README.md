# Recipe API

## Description
A backend API for managing recipes with user authentication and authorization.

## Setup

1. Clone repo
2. Install dependencies:
   npm install

3. Create .env file:
   SESSION_SECRET=your_secret
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=recipe_db

4. Start server:
   node server.js

## API Endpoints

### Auth
POST /auth/register  
POST /auth/login  
POST /auth/logout  

### Recipes
GET /recipes  
GET /recipes/:id  
POST /recipes (protected)  
PUT /recipes/:id (protected + ownership)  
DELETE /recipes/:id (protected + ownership)

## Side notes
- Uses session-based authentication
- Users can only modify their own recipes