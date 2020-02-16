const mongoose = require("mongoose");

const Sleep = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const SleepModel = mongoose.model("Sleep", Sleep);
module.exports = SleepModel;
