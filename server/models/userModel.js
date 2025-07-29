import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, reqiured: true, unique: true },
  email: { type: String, reqiured: true, unique: true },
  photo: { type: String, reqiured: true },
  firastName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
