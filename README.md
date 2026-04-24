# 🚀 AI Data Analyzer Dashboard

> A full-stack AI-powered dashboard for data analysis, task management, and machine learning predictions using MERN + Python microservices.

---

## 🌟 Overview

AI Data Analyzer is a modern full-stack application that allows users to:

* Upload CSV datasets
* Perform automated data analysis
* Generate predictions using machine learning
* Manage tasks with status tracking
* Visualize insights through charts

This project demonstrates **real-world architecture**, combining a Node.js backend with a Python-based AI microservice.

---

## 🏗️ Architecture

```
Frontend (React + Tailwind)
        ↓
Backend API (Node.js + Express)
        ↓
Python Microservice (FastAPI)
        ↓
MongoDB Database
```

---

## ✨ Features

### 🔐 Authentication

* JWT-based login & registration
* Protected routes (frontend + backend)
* Secure password hashing (bcrypt)

### 📊 Data Analysis

* Upload CSV files
* Data processing using Pandas
* Summary statistics generation

### 🤖 AI Predictions

* Linear Regression model (scikit-learn)
* Basic predictive insights

### ✅ Task Management

* Create, Read, Update, Delete tasks
* Task status tracking:

  * Pending
  * In Progress
  * Completed

### 📈 Dashboard UI

* Sidebar + header layout
* Charts (Recharts)
* Clean Tailwind-based design

### 🔒 Security

* Helmet (secure headers)
* Rate limiting
* JWT authentication middleware

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js
* Tailwind CSS
* Axios
* React Router
* Recharts

### 🔹 Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Multer (file upload)

### 🔹 AI / Data

* Python
* FastAPI
* Pandas
* NumPy
* scikit-learn

### 🔹 DevOps

* Docker (optional)
* Environment variables (.env)

---

## 📂 Folder Structure

```
ai-data-analyzer/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│
├── python-service/
│   ├── app.py
│   └── model.py
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-data-analyzer.git
cd ai-data-analyzer
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Python Service Setup

```bash
cd python-service
pip install fastapi uvicorn pandas scikit-learn
uvicorn app:app --reload
```

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` inside backend:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tasks (Protected)

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`

### Data

* POST `/api/data/upload`

---

## 🧪 Testing (Postman)

1. Login → get token
2. Add header:

```
Authorization: Bearer <token>
```

3. Call protected routes

---

## 🚀 Future Improvements

* Real-time updates (WebSockets)
* Role-based authentication
* Advanced ML models
* Deployment (AWS / Render / Docker)
* Dynamic charts from uploaded data

---

## 🎯 Key Highlights

* Microservice architecture (Node + Python)
* Secure authentication system
* Clean backend structure
* AI integration in full-stack app
* Modern dashboard UI

---

## 👨‍💻 Author

**Govind Kumar**
Software Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
