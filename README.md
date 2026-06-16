# Task Management App - Frontend

Frontend application for the Task Management System built with Next.js, React Query, Tailwind CSS, React Hook Form, and Zod.

---

## 🚀 Features

### Authentication

* User Signup
* User Login
* JWT-based Authentication
* Protected Routes

### Task Management

* View Tasks
* Create Tasks
* Update Tasks
* Delete Tasks
* Task Status Management
* Priority Levels
* Due Date Support

### User Experience

* Responsive Design
* Loading States
* Error Handling
* Empty States
* Search & Filtering
* Pagination Support

---

## 🧱 Tech Stack

* Next.js (App Router)
* React
* TypeScript
* React Query (TanStack Query)
* Tailwind CSS
* React Hook Form
* Zod
* Axios

---

## 📦 Installation

Clone the repository:

```bash
git clone <frontend-repository-url>
cd client
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Application

Development mode:

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Build the application:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

## 📁 Suggested Folder Structure

```text
src/
├── app/
├── components/
├── hooks/
├── services/
├── types/
├── lib/
├── providers/
└── utils/
```

---

## 🔗 Backend API

The frontend communicates with the backend REST API.

Default API URL:

```text
http://localhost:5000/api
```

Configure it using the `NEXT_PUBLIC_API_URL` environment variable.

