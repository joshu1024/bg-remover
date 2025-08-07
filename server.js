import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./configs/connecttoDB.js";
import useRouter from "./routes/userRoutes.js";
import bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// 🧠 Connect to DB first
await connectToDB();

// 🛡️ Add raw body parser ONLY for Clerk webhooks
app.use("/api/user/webhooks", bodyParser.raw({ type: "application/json" }));

// 🛣️ Mount all routes
app.use("/api/user", useRouter);

// 🌐 Add express.json AFTER webhooks
app.use(express.json());
app.use(cors());

// 🔎 Simple GET to confirm it's working
app.get("/", (req, res) => {
  res.send("It is working");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
});
