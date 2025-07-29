import mongoose from "mongoose";

export const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URL);
  if (conn) {
    console.log("you have succesfully connected to database");
  } else {
    console.log("error connecting to databse");
  }
};
