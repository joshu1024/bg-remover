import mongoose from "mongoose";

const connectToDB = async () => {
  const conn = await mongoose.connect(`${process.env.MONGO_DB_URL}/bg-remover`);
  if (conn) {
    console.log("you have succesfully connected to database");
  } else {
    console.log("error connecting to databse");
  }
};

export default connectToDB;
