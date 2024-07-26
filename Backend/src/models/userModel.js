const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  role: { type: String, enum: ["User", "Admin"], default: "User" },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
