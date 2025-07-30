import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./configs/connecttoDB.js";
import useRouter from "./routes/userRoutes.js";
import router from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
await connectToDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is working");
});

app.use("/api/user", useRouter);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
