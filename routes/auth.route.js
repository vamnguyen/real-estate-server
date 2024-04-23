const router = require("express").Router();
const { registerAccount } = require("../controllers/auth.controller");
const validateDTO = require("../middlewares/validation");
const Joi = require("joi");

router.post(
  "/register",
  validateDTO(
    Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    })
  ),
  registerAccount
);

module.exports = router;
