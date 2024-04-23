const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message,
  });
};

const throwErrorWithStatus = (statusCode, message, res, next) => {
  const error = new Error(message);
  res.status(statusCode);
  next(error);
};

const badRequestException = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, throwErrorWithStatus, badRequestException };
