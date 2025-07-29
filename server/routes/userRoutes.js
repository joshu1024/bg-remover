import express from "express";
import { clerkWebhooks } from "../controllers/UserControllers.js";

const useRouter = express.Router();

useRouter.post("/webhooks", clerkWebhooks);

export default useRouter;
