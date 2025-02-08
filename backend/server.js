require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/authRoutes");
const connectDb = require("./utils/db");

// middleware
app.use(express.json());

// router
app.use("/api/auth", router);

// server
connectDb().then(() => {
  app.listen(5000, () => {
    console.log(`app is listening to port 5000`);
  });
});
