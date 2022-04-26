const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema ({

});

const inventorySchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  notes: [notesSchema]
}, {
  // Mongoose will automatically add and maintain
  // a createdAt and updatedAt property on the docs
  timestamps: true
});

module.exports = mongoose.model('Inventory', inventorySchema);