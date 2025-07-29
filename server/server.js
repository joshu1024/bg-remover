import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./configs/connecttoDB.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is working");
});

app.listen(PORT, () => {
  connectToDB();
  console.log(`server running at port ${PORT}`);
});
