const { throwErrorWithStatus } = require("./errorHandler");

const validateDTO = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const message = error.details[0].message.replaceAll(`\"`, "");
      throwErrorWithStatus(403, message, res, next);
    }
    next();
  };
};

module.exports = validateDTO;
