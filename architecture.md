
# 🧠 Architecture Decisions – WMS Backend API

This document outlines key architectural choices made in designing the Warehouse Management System (WMS) backend.

---

## 🏗️ Tech Stack
- **Node.js + Express.js**: Chosen for its non-blocking I/O and ease of setting up RESTful APIs.
- **MongoDB + Mongoose**: A flexible NoSQL database ideal for evolving schema and hierarchical inventory/order relationships.
- **dotenv**: For secure environment variable management.
- **Postman**: Used for API testing and validation.
- **Nodemon**: To enable live development without restarting the server manually.

---

## 📐 Project Structure

```
wms-backend-api/
├── controllers/       # Business logic for inventory & orders
├── models/            # Mongoose schemas for MongoDB
├── routes/            # Route declarations for each API module
├── config/            # DB connection and environment setup
├── server.js          # Entry point and route middleware
├── .env               # Environment variables (e.g., Mongo URI)
├── sample-data.md     # Example input/output
```

---

## 🔁 Modular Design
- **Separation of Concerns**: Models handle schema, controllers process logic, routes expose endpoints.
- **Scalability**: Easy to add modules like shipments, users, etc.
- **Reusability**: Controller methods are clean, promise-based, and testable.

---

## 🔐 Data Constraints
- `sku` is marked as **unique** to prevent duplicate inventory entries.
- `itemId` in Orders references Inventory items via **MongoDB ObjectId**, ensuring relational integrity.

---

## 🌱 Extensibility
- Supports adding **authentication (JWT)** and **role-based access** easily.
- Microservice-ready via separation and modular structure.
- Ready for CI/CD and cloud deployment on platforms like **Render** or **Railway**.

---

## 🔎 Error Handling
Basic try-catch and HTTP status responses are in place.
Future improvements:
- Add middleware for centralized error handling
- Input validation via `express-validator` or `Joi`

---

## ✅ Summary
The architecture prioritizes simplicity, clarity, and growth. It's built with best practices for REST APIs and clean code that will scale as business needs evolve.
