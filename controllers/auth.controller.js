const asyncHandler = require("express-async-handler");
const { register } = require("../services/auth.service");

const registerAccount = asyncHandler(async (req, res) => {
  const newUser = await register(req, res);

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      newUser,
    },
  });
});

module.exports = {
  registerAccount,
};
