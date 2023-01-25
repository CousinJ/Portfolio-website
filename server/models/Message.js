const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  { name: String, email: String, message: String },
  { collection: "messages" }
);

const messageModel = mongoose.model("message", messageSchema);

module.exports = messageModel;
