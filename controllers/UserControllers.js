import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    console.log("🔔 Clerk webhook received:", req.body);

    // Verify webhook signature
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });
    console.log("✅ Webhook verified");
    console.log("Webhook type:", type);

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || "no email",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        try {
          await userModel.create(userData);
          console.log("✅ User created:", userData.email);
          res.status(201).json({ message: "User created" });
        } catch (dbError) {
          console.error("❌ MongoDB create error:", dbError.message);
          res.status(500).json({ error: "Database error" });
        }
        break;
      }

      case "user.updated": {
        const updateData = {
          email: data.email_addresses?.[0]?.email_address || "",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        try {
          await userModel.findOneAndUpdate({ clerkId: data.id }, updateData);
          console.log("🔄 User updated:", data.id);
          res.status(200).json({ message: "User updated" });
        } catch (dbError) {
          console.error("❌ MongoDB update error:", dbError.message);
          res.status(500).json({ error: "Database error" });
        }
        break;
      }

      case "user.deleted": {
        try {
          await userModel.findOneAndDelete({ clerkId: data.id });
          console.log("🗑️ User deleted:", data.id);
          res.status(200).json({ message: "User deleted" });
        } catch (dbError) {
          console.error("❌ MongoDB delete error:", dbError.message);
          res.status(500).json({ error: "Database error" });
        }
        break;
      }

      default:
        console.warn("⚠️ Unhandled Clerk event type:", type);
        res.status(200).json({ message: "Unhandled event type" });
        break;
    }
  } catch (error) {
    console.error(
      "❌ Webhook verification failed or other error:",
      error.message
    );
    res.status(400).json({ success: false, error: "Webhook error" });
  }
};

export { clerkWebhooks };
