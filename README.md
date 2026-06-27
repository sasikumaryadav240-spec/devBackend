# 🚀 DevConnect Backend API

A scalable REST API for **DevConnect**, a full-stack social networking platform built for developers. This backend provides secure authentication, user profile management, post creation, likes, comments, and protected APIs using modern backend technologies.

---

## 📌 Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🔒 Protected Routes
- 👨‍💻 Developer Profile Management
- 📝 Create, Update & Delete Posts
- ❤️ Like & Unlike Posts
- 💬 Comment System
- 📸 Cloudinary Image Upload
- 🔍 Search Functionality
- ✅ Input Validation
- ⚡ Centralized Error Handling
- 🌐 RESTful API Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Cloudinary
- Multer
- Express Validator
- CORS
- Dotenv

---

## 📂 Project Structure

```
src/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── validations/
└── server.js
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/sasikumaryadav240-spec/devBackend.git
```

Move into the project

```bash
cd devconnect-backend
```

Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=MongoDB-Atlas

JWT_SECRET=Create 100 chars and numbers

CLOUDINARY_CLOUD_NAME=DevConnect

CLOUDINARY_API_KEY=*********

CLOUDINARY_API_SECRET=******

CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## 📚 API Modules

### Authentication

- Register User
- Login User
- Get Current User
- Update Password

### User Profile

- Get User Profile
- Update Profile
- Upload Profile Picture

### Posts

- Create Post
- Get All Posts
- Get Single Post
- Update Post
- Delete Post

### Likes

- Like Post
- Unlike Post

### Comments

- Add Comment
- Delete Comment

---

## 🔒 Authentication

Protected routes require a valid JWT token.

Example:

```
Authorization: Bearer 100chars
```

---

## 📸 Image Upload

User profile images are uploaded to **Cloudinary** and stored securely.

---

## 📈 API Highlights

- RESTful API Design
- JWT Authentication
- Secure Password Hashing
- Protected Routes
- Input Validation
- Error Handling Middleware
- MongoDB Relationships
- Clean Folder Structure
- Scalable Architecture

---

## 🧪 Future Improvements

- Real-Time Chat (Socket.IO)
- Friend Requests
- Follow / Unfollow Users
- Notifications
- Email Verification
- Password Reset
- Two-Factor Authentication
- API Documentation (Swagger)

---

## 👨‍💻 Author

**Sasi Kumar Yadav**

MERN Stack Developer

GitHub:
https://github.com/sasikumaryadav240-spec

---

## 📄 License

This project is licensed under the MIT License.
