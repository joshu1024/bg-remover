import { response } from "express";
import userModel from "../models/userModel.js";
import axios from "axios";
import fs from "fs";
import FormData from "form-data"; // ✅ Correct!

const removeBgImage = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel.findById(userId);

    if (!user) {
      res.json({ success: false, message: "User not found" });
      return;
    }
    if (user.creditBalance === 0) {
      res.json({ success: false, message: "Insufficient credits" });
      return;
    }
    const imagePath = req.file.path;

    const imageFile = fs.createReadStream(imagePath);
    const formData = new FormData();

    formData.append("image_file", imageFile);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );
    //3:30:04
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "backgroud removed",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      creditBalance: user.creditBalance,
    });
  }
};

export default removeBgImage;
