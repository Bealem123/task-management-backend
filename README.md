
# Task Manager Backend API

This backend API is built for the Fetan Systems Backend Internship project. It allows users to register, login, and manage tasks (create, read, update, delete) with authentication using JWT tokens.

## Features

- User signup and login with password hashing (bcrypt)
- JWT-based authentication and authorization
- CRUD operations on tasks linked to authenticated users
- Built with Node.js, Express, and MongoDB (Mongoose)

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt
- jsonwebtoken
- dotenv

## Project Structure

task-manager-backend/
├── controllers/
│ ├── authController.js
│ └── taskController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ └── Task.js
├── routes/
│ ├── authRoutes.js
│ └── taskRoutes.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md



## Setup and Installation

1. Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/task-manager-backend.git
cd task-manager-backend

2 Install dependencies:
npm install


3 Create a .env file in the root directory with the following variables:

PORT=5000
MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/your_database?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key


4 Start the development server:
npm run dev
The API will run on http://localhost:5000.


API Endpoints
Auth Routes
POST /api/auth/signup — Register a new user
Required body: { "email": "user@example.com", "password": "password" }

POST /api/auth/login — Login and get JWT token
Required body: { "email": "user@example.com", "password": "password" }

GET /api/auth/profile — Get current user profile (Authorization: Bearer token required)

Task Routes (Require Authentication)
POST /api/tasks — Create a new task
Required body: { "name": "Task name" }

GET /api/tasks — Get all tasks for the authenticated user

PATCH /api/tasks/:id — Update task by ID
Body can include { "name": "New name", "completed": true }

DELETE /api/tasks/:id — Delete task by ID

License
This project is for internship submission and educational purposes.
=======
# task-management-backend
>>>>>>> 6fa4407f80d0ddd8b95da7a7a31fea787c8a9e79
