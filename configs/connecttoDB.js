import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URL}/bg-remover`);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export default connectToDB;
