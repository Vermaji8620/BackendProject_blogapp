const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    default: false,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
