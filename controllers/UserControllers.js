import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  const payload = req.body; // raw Buffer
  const headers = {
    "svix-id": req.headers["svix-id"],
    "svix-timestamp": req.headers["svix-timestamp"],
    "svix-signature": req.headers["svix-signature"],
  };

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, headers);
    console.log("✅ Webhook verified:", evt.type);
  } catch (err) {
    console.error("❌ Webhook verification failed:", err.message);
    return res.status(400).json({ error: "Invalid signature" });
  }

  const { data, type } = evt;

  try {
    switch (type) {
      case "user.created":
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || "no email",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        await userModel.create(userData);
        console.log("✅ User created:", userData.email);
        return res.status(201).json({ message: "User created" });

      case "user.updated":
        const updateData = {
          email: data.email_addresses?.[0]?.email_address || "",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, updateData);
        console.log("🔄 User updated:", data.id);
        return res.status(200).json({ message: "User updated" });

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
        console.log("🗑️ User deleted:", data.id);
        return res.status(200).json({ message: "User deleted" });

      default:
        console.warn("⚠️ Unhandled Clerk event type:", type);
        return res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (dbError) {
    console.error("❌ MongoDB error:", dbError.message);
    return res.status(500).json({ error: "Database error" });
  }
};

export { clerkWebhooks };
