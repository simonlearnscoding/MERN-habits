MERN Starter

Welcome to my MERN Starter project! 🚀 This is a fully functional boilerplate for building full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack. It includes authentication with Clerk, state management with React Query, and is fully styled with Tailwind CSS.

🌟 Tech Stack

Frontend (React + Vite)

React – Component-based UI framework

Vite – Fast build tool for React

React Router – Client-side routing

React Query (@tanstack/react-query) – Data fetching and caching

Clerk – Authentication and user management

Tailwind CSS – Utility-first styling framework

Backend (Node.js + Express + MongoDB)

Express.js – Fast, minimal backend framework

MongoDB + Mongoose – NoSQL database with schema modeling

CORS – Cross-origin requests handling

dotenv – Environment variable management

🏗️ Project Structure

mern-starter/
├── backend/ # Express backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ │ ├── middleware/
│ │ └── server.ts
│ ├── .env # Backend environment variables
│ ├── package.json # Backend dependencies
│ ├── tsconfig.json # TypeScript config
│ └── dist/ # Compiled backend code
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ ├── index.css
│ ├── .env # Frontend environment variables
│ ├── package.json # Frontend dependencies
│ ├── tailwind.config.js
│ ├── vite.config.ts # Vite config
│ └── dist/ # Build output
│
└── README.md

🔧 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/YOUR_GITHUB_USERNAME/mern-starter.git
cd mern-starter

2️⃣ Install Dependencies

cd backend && npm install
cd ../frontend && npm install

3️⃣ Set Up Environment Variables

Create .env files in both backend/ and frontend/.

Backend (backend/.env):

PORT=5000
MONGO_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key

Frontend (frontend/.env):

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000

4️⃣ Run the Application

Start the Backend

cd backend
npm run dev

Backend should be running at http://localhost:5000.

Start the Frontend

cd frontend
npm run dev

Frontend should be running at http://localhost:5173.

🚀 Deployment

Deploy Backend to Railway

Push backend to GitHub.

Deploy on Railway.

Add environment variables in Railway settings.

Update VITE_BACKEND_URL in frontend .env with the deployed backend URL.

Deploy Frontend to Netlify

Push frontend to GitHub.

Deploy on Netlify.

Add frontend environment variables in Netlify settings.

📌 Features

🔒 Authentication with Clerk (Sign in, Sign up, User Management)

⚡ Optimistic UI updates using React Query

🛠️ TypeScript support in both frontend and backend

🏎️ Vite for blazing fast frontend development

🌍 CORS handling for smooth API communication

🛠️ To-Do & Future Improvements

✅ Add more authentication providers (Google, GitHub, etc.)

✅ Implement role-based access control (RBAC)

✅ Add unit and integration tests

✅ Improve UI with animations

📝 License

This project is licensed under the MIT License.

Feel free to fork, modify, and use this MERN starter in your projects! 🚀

