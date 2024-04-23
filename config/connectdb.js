const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    logging: false,
    timezone: "+07:00",
  }
);

const testDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = testDBConnection;
