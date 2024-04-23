const User = require("../models/User");

// Register a new user
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.create({ email, password });
  return newUser;
};
