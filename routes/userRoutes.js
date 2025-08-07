import express from "express";
import { clerkWebhooks } from "../controllers/UserControllers.js";

const useRouter = express.Router();

// 🧩 This route gets mounted at /api/user
useRouter.post("/webhooks", clerkWebhooks);

export default useRouter;
