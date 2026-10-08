# 🎁 Gift Ideas API

A RESTful API built using **Node.js, Express.js, MongoDB, and Mongoose** to manage gift ideas that you plan to buy.

## 📌 Project Overview

The **Gift Ideas API** allows users to create, view, update, and delete gift ideas.

Each gift contains information about:

- Item name
- Price
- Occasion
- Whether the gift has been bought
- Gift date

The API also supports:

- Filtering gifts by occasion
- Sorting gifts by price
- Calculating the total price of all gifts
- Input validation
- Error handling

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for building the REST API
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling library
- **JavaScript** - Programming language
- **dotenv** - Environment variable management
- **Postman** - API testing

## 📂 Project Structure

```text
GIFTIDEAS/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── giftController.js
│
├── middleware/
│   └── errorHandler.js
│
├── models/
│   └── gift.js
│
├── routes/
│   └── gift.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── node_modules/
