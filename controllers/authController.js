import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Signup logic
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //if the user not give any details
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }
    //if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User with same email is already exists",
      });
    }

    //hassing the pass
    const hashedPassword = await bcrypt.hash(password, 10);

    //create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User reagister successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

//Login Logic
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //find the user
    const user = await User.findOne({ email });
    //if not exists
    if (!user) {
      return res.status(401).json({
        message: "Sign up first",
      });
    }
    //if exists 1.password match then 2.creating webtoken and send the responce
    //1.password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500),json({
        message:error.message
    });
  }
};

