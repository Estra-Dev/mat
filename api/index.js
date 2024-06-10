import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import memberRouter from "./routes/Member.routes.js";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: ["https://ctmtraining.onrender.com", "http://localhost:5173"],
  })
);
app.use("/member", memberRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

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
