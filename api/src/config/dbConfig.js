import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.Clouddb);
    conn && console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  }
};
