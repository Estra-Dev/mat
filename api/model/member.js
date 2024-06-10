import { Schema, model } from "mongoose";

const memberSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    lastname: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      minLength: 11,
      maxLength: 11,
    },
    nationality: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 50,
    },
    qst1: {
      type: String,
    },
    qst2: {
      type: String,
    },
    qst3: {
      type: String,
    },
    qst4: {
      type: String,
    },
    qst5: {
      type: String,
    },
    qst6: {
      type: String,
    },
  },
  { timestamps: true }
);

const Member = model("Member", memberSchema);
export default Member;
