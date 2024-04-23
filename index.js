const express = require("express");
require("dotenv").config();
const cors = require("cors");
const testDBConnection = require("./config/connectdb");
const initRoutes = require("./routes");

// Create express app
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize routes
initRoutes(app);

testDBConnection();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
