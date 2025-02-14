require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const contactRoute = require("./routes/contactRouter");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/errorMiddleware");

// middleware
app.use(express.json());

// router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

// server
connectDb().then(() => {
  app.listen(5000, () => {
    console.log(`app is listening to port 5000`);
  });
});
