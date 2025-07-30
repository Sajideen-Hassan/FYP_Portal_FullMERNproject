// backend/models/Supervisor.js
const mongoose = require("mongoose");

const supervisorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("Supervisor", supervisorSchema);
