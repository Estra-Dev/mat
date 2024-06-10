import express from "express";
import {
  getMember,
  getMembers,
  register,
  survey,
} from "../controller/Member.controller.js";

const router = express.Router();

router.post("/register", register);
router.get("/getMembers", getMembers);
router.get("/:memberId", getMember);
router.put("/survey/:memberId", survey);

export default router;
