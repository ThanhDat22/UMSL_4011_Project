# Final Project – Web Development with Advanced JavaScript

## 📌 Project Overview
This is the final project for **Web Development with Advanced JavaScript (Spring 2025)**.  
It is divided into **two major parts**:  
- **Backend (Node.js + Express + MongoDB)** – 50 points【120†source】  
- **Frontend (React + TypeScript)** – 80 points【121†source】  

The project implements a **full-stack blogging application** where users can create, read, update, and delete (CRUD) blog posts.

---

## 📂 Project Structure

```
final-project/
│
├── backend/               # Node.js + Express + MongoDB API
│   ├── models/            # Mongoose schema & types
│   ├── routes/            # Express CRUD endpoints
│   └── server.js          # Backend entry point
│
├── frontend/              # React + TypeScript client
│   ├── src/
│   │   ├── components/    # BlogPost, BlogList, SearchBox, Login, etc.
│   │   ├── pages/         # Routing pages
│   │   └── App.tsx        # Root component
│   └── package.json
│
└── README.md
```

---

## 🖥️ Backend Requirements
The backend must include【120†source】:
- Use of `body-parser` and `cors` middleware
- Mongoose schema with **BlogPost** type:
  - `title`, `body`, `author`, `date` (default = `Date.now`)
- CRUD endpoints:
  - `GET /posts` → list all blog posts
  - `GET /posts/:id` → get blog post by ID
  - `POST /posts` → create new blog post
  - `PUT /posts/:id` → update blog post
  - `DELETE /posts/:id` → delete blog post

---

## 🎨 Frontend Requirements
The frontend must include【121†source】:
- No console errors or warnings
- Styled with **Material UI / CSS / Tailwind**
- Display placeholder text when no blog posts exist
- Blog posts displayed as individual components
- CRUD operations with automatic page reloads:
  - Create → form or modal with fields
  - Read → display all posts using `map`
  - Update → optional (extra credit, +10 pts)
  - Delete → confirm with a modal (“chicken test”)
- TypeScript interface for BlogPost object (must include `_id`)
- Use of `useState` and `useEffect` hooks
- Logical project file structure
- `node_modules` excluded from submission

---

## ⚙️ Setup Instructions

### 1. Backend (Node.js + Express + MongoDB)
```bash
cd backend
npm install
npm start
```
The server will run on `http://localhost:5000`.

### 2. Frontend (React + TypeScript)
```bash
cd frontend
npm install
npm start
```
The app will run on `http://localhost:3000`.

---

## 🚀 Features
- Create, view, update, and delete blog posts
- Responsive frontend with React + Material UI
- Backend powered by Node.js, Express, and MongoDB
- TypeScript used for type safety
- Automatic frontend updates on CRUD operations
- Extra credit: inline editing of blog posts

---

## 👨‍💻 Author
- **Thanh Dat Nguyen**  
  University of Missouri–St. Louis  
  Course: Web Development with Advanced JavaScript (Spring 2025)  

---
