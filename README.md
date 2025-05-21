Subscription Management System API

A backend API for managing user subscriptions, built using Node.js, Express.js, and MongoDB.

🛠️ Tech Stack

Node.js
Express.js
MongoDB
Mongoose
📌 Features

User authentication using JWT
Subscription creation and management
Email reminder system for renewals
Rate limiting and bot protection with Arcjet
Centralized error handling and logging
Clean folder structure with modular code
🚀 Getting Started

Prerequisites
Node.js
npm
Git
Installation
Clone the repository and install dependencies:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
Environment Variables
Create a .env.local file in the root directory and add the following:

PORT=5500
SERVER_URL=http://localhost:5500
NODE_ENV=development
DB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=1d
ARCJET_KEY=
ARCJET_ENV=development
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=
EMAIL_PASSWORD=
Running the Server
npm run dev
Server will be running at: http://localhost:5500

📎 Example Subscription JSON

{
  "name": "Premium Plan",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}