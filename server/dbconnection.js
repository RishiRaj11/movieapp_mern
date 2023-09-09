import mongoose from "mongoose";

export const connection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("db connected successfully");
  } catch (e) {
    console.log("Error while connecting to DB", e);
  }
};
