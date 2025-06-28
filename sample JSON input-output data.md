
# 📦 Sample Data for WMS Backend API

This document contains sample request and response bodies for the Inventory and Order API endpoints.

---

## 📘 Inventory Module

### ➕ Create Inventory Item
**POST** `/api/inventory`

**Request Body:**
```json
{
  "itemName": "Wireless Mouse",
  "quantity": 100,
  "location": "Aisle 3 - Bin B",
  "sku": "WM-1001"
}
```

**Response:**
```json
{
  "_id": "665c8a12f2fc489ac8b1d789",
  "itemName": "Wireless Mouse",
  "quantity": 100,
  "location": "Aisle 3 - Bin B",
  "sku": "WM-1001",
  "createdAt": "2025-06-28T10:20:11.123Z",
  "updatedAt": "2025-06-28T10:20:11.123Z"
}
```

---

### 📋 Get All Inventory Items
**GET** `/api/inventory`

**Sample Response:**
```json
[
    {
        "_id": "685f705a8f70954183aa915d",
        "itemName": "Wireless Mouse",
        "quantity": 100,
        "location": "Rack A - Bin 3",
        "sku": "MSE-WIR-001",
        "createdAt": "2025-06-28T04:32:26.695Z",
        "updatedAt": "2025-06-28T04:32:26.695Z",
        "__v": 0
    },
    {
        "_id": "685f73ba8f70954183aa9165",
        "itemName": "Wireless Keyboard",
        "quantity": 80,
        "location": "Rack B - Bin 2",
        "sku": "KEY-WIR-002",
        "createdAt": "2025-06-28T04:46:50.791Z",
        "updatedAt": "2025-06-28T04:46:50.791Z",
        "__v": 0
    },
    {
        "_id": "685f74358f70954183aa916c",
        "itemName": "Test Product",
        "quantity": 10,
        "location": "Shelf A1",
        "sku": "TEST-001",
        "createdAt": "2025-06-28T04:48:53.490Z",
        "updatedAt": "2025-06-28T04:48:53.490Z",
        "__v": 0
    }
]
```

---

## 📘 Order Module

### ➕ Create Order
**POST** `/api/orders`

**Request Body:**
```json
{
  "customerName": "Alice Johnson",
  "items": [
    {
      "itemId": "665c8a12f2fc489ac8b1d789",
      "quantity": 2
    }
  ],
  "status": "Pending"
}
```

**Response:**
```json
{
  "_id": "665c8b99fa13e7f55e1098b0",
  "customerName": "Alice Johnson",
  "items": [
    {
      "itemId": "665c8a12f2fc489ac8b1d789",
      "quantity": 2
    }
  ],
  "status": "Pending",
  "createdAt": "2025-06-28T10:25:13.456Z",
  "updatedAt": "2025-06-28T10:25:13.456Z"
}
```

---

### 📋 Get All Orders
**GET** `/api/orders`

**Sample Response:**
```json
[
    {
        "_id": "685f749f8f70954183aa916e",
        "customerName": "John Smith",
        "items": [
            {
                "itemId": {
                    "_id": "685f74358f70954183aa916c",
                    "itemName": "Test Product",
                    "quantity": 10,
                    "location": "Shelf A1",
                    "sku": "TEST-001",
                    "createdAt": "2025-06-28T04:48:53.490Z",
                    "updatedAt": "2025-06-28T04:48:53.490Z",
                    "__v": 0
                },
                "quantity": 3,
                "_id": "685f749f8f70954183aa916f"
            }
        ],
        "status": "Pending",
        "createdAt": "2025-06-28T04:50:39.300Z",
        "updatedAt": "2025-06-28T04:50:39.300Z",
        "__v": 0
    }
]
```

---

## ✅ Notes
- All `itemId` values must be valid MongoDB ObjectIds from the inventory collection.
- `sku` values must be unique.
