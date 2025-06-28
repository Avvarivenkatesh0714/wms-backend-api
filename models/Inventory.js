const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String },
  sku: { type: String, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Inventory', InventorySchema);