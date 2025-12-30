# Smart ToDo API

A secure RESTful backend API for managing personal tasks with user authentication.

## 🚀 Features
- User Registration & Login (JWT Authentication)
- Create, Read, Update, Delete (CRUD) tasks
- User-specific task access
- Secure protected routes

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

## 📁 API Endpoints

### Auth
| Method | Endpoint |
|------|---------|
| POST | /api/auth/signup |
| POST | /api/auth/login |

### Tasks (Protected)
| Method | Endpoint |
|------|---------|
| POST | /api/tasks |
| GET | /api/tasks |
| PUT | /api/tasks/:id |
| DELETE | /api/tasks/:id |

## ⚙️ Setup Instructions

```bash
git clone <repo-url>
cd smart-todo-api
npm install
npm run dev
