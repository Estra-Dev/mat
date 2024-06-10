import Member from "../model/member.js";

export const register = async (req, res) => {
  const { firstname, lastname, address, phone, nationality, email } = req.body;

  try {
    const userPhone = await Member.findOne({ phone });
    if (userPhone) {
      res.json("Phone already exist");
    }
    const userEmail = await Member.findOne({ email });
    if (userEmail) {
      res.json("Email already exist");
    }

    if (
      firstname === "" ||
      lastname === "" ||
      address === "" ||
      nationality === "" ||
      email === "" ||
      phone === ""
    ) {
      res.json("All Fields are required");
    }

    if (phone.length < 11 || phone.length > 11) {
      res.json("Phone cannot be less than 11 digits");
    }
    const newMember = await Member.create({
      firstname,
      lastname,
      address,
      phone,
      nationality,
      email,
    });
    res.status(201).json(newMember);
  } catch (error) {
    console.log(error);
  }
};

export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    console.log(error);
  }
};

export const getMember = async (req, res) => {
  try {
    const member = await Member.findById(req.params.memberId);
  } catch (error) {
    console.log(error);
  }
};

export const survey = async (req, res) => {
  const { qst1, qst2, qst3, qst4, qst5, qst6 } = req.body;
  try {
    const member = await Member.findById(req.params.memberId);
    if (!member) {
      res.status(400).json("You are not a member");
    }
    if (
      qst1 === "" ||
      qst2 === "" ||
      qst3 === "" ||
      qst4 === "" ||
      qst5 === "" ||
      qst6 === ""
    ) {
      res.status(400).json("All fields are required");
    } else {
      const surveyed = await Member.findByIdAndUpdate(
        req.params.memberId,
        {
          $set: {
            qst1,
            qst2,
            qst3,
            qst4,
            qst5,
            qst6,
          },
        },
        { new: true }
      );

      res.status(201).json(surveyed);
    }
  } catch (error) {
    console.log(error);
  }
};
