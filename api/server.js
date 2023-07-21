import { createServer } from 'http';
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
const allowedOrigins = [
  "http://127.0.0.1:5173",
  "https://riverr-freelance.netlify.app",
  "https://64a6b5a22f111f0008e6241a--riverr-freelance.netlify.app",
];

app.use(cors({ origin: allowedOrigins, credentials: true })); 
app.use(express.json()); 
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello, Riverr Server is running here!")
})
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

// Convert app into a serverless function for backend on netlify
const server = createServer(app);

export function handler(event, context) {
  // Connect to MongoDB and start the server
  connect().then(() => {
    server.listen((context && context.port) || 5000, () => {
      console.log('Riverr Server is running here!');
    });
  });
}

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   connect();
//   console.log(`Server is listening on ${port}...`);
// });
