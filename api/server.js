import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true })); //to allow multiple websites (like our frontend) to interact with our api
app.use(express.json()); //a middleware to let our application take input from the user
app.use(cookieParser());
app.use((req, res, next) => {
  console.log("used.");
  res.header(
    "Content-Security-Policy",
    "default-src *; img-src *; frame-src *; script-src 'nonce-{4949567}' 'strict-dynamic';"
  );
  next();
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(5000, () => {
  connect();
  console.log("Server is listening on 5000...");
});
