import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import memberRouter from "./routes/Member.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/member", memberRouter);

try {
  const connect = await mongoose.connect(process.env.MONGO_URL);
  if (connect) {
    console.log("momgoDB is connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
} catch (error) {
  console.log(error);
}
