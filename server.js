import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./configs/connecttoDB.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import imageRouter from "./routes/imageRoutes.js";
import fs from "fs";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://bg-remover-xi-brown.vercel.app",
    credentials: true,
  })
);

app.use("/api/user", userRoutes);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("It is working");
});

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
  connectToDB();
});
