const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: [true, 'email must be required'] },
  salary: { type: Number, required: true },
  loc: { type: String, default: 'BLR' },
  active: { type: Boolean, default: true }
});

const empModel = new mongoose.model('Employee', employeeSchema);
module.exports = empModel;
