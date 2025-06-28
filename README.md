
# 📦 Warehouse Management System (WMS) – Backend API

A simple backend API for managing inventory and orders in a warehouse, built using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- CRUD operations for **Inventory**
- CRUD operations for **Orders**
- Unique SKU validation
- Inventory reference inside orders
- Modular, scalable project structure
- REST API with JSON input/output
- Sample Postman collection included

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Testing**: Postman
- **Config**: dotenv for environment variables

---

## 📁 Folder Structure

```
wms-backend-api/
├── controllers/       # API logic
├── models/            # Mongoose schemas
├── routes/            # Route definitions
├── config/            # DB setup
├── .env               # Environment variables
├── server.js          # Entry point
├── sample-data.md     # Sample request/response
├── architecture.md    # Design decisions
```

---

## 🔧 Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/Avvarivenkatesh0714/wms-backend-api.git
cd wms-backend-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
Create a `.env` file in the root:
```
MONGO_URI=mongodb://localhost:27017/wms_db
PORT=5000
```

4. **Run the server**
```bash
npm run dev    # For development with nodemon
```

---

## 🌐 API Endpoints

### 🔹 Inventory

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | /api/inventory         | Get all inventory items   |
| GET    | /api/inventory/:id     | Get one inventory item    |
| POST   | /api/inventory         | Create new inventory item |
| PUT    | /api/inventory/:id     | Update inventory item     |
| DELETE | /api/inventory/:id     | Delete inventory item     |

### 🔹 Orders

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/orders        | Get all orders          |
| GET    | /api/orders/:id    | Get one order           |
| POST   | /api/orders        | Create new order        |
| PUT    | /api/orders/:id    | Update order            |
| DELETE | /api/orders/:id    | Cancel/delete order     |

---

## 📬 Postman Collection

Import the included file:  
`WMS_API.postman_collection.json`  
To test all endpoints directly in Postman.

---

## ✅ Author

- Avvari venkatesh

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
