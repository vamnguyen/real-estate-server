const {
  errorHandler,
  badRequestException,
} = require("../middlewares/errorHandler");
const authRouter = require("./auth.route");

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/*", badRequestException);

  app.use(errorHandler);
};

module.exports = initRoutes;
