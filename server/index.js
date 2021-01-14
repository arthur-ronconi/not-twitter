const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

// Middlewares
const morgan = require("morgan");
app.use(morgan("dev"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// Routes
const homeRoute = require("./routes/index");
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);
app.use("/", homeRoute);

// Connect to DB
const connectDB = require("./config/db");
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
