import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { email, password, fullName, department, position, shift, role } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "Error",
        message: "Email is already registered.",
      });
    }

    const user = new User({
      email,
      password,
      fullName,
      department,
      position,
      shift,
      role,
    });

    await user.save();

    const { password: _, ...userData } = user.toObject();
    res.status(201).json({
      status: "Success",
      message: "User signup successfully",
      user: userData,
    });
  } catch (error) {
    console.error("Singup Error:", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server error",
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+passowrd");
    if (!user) {
      return res.status(400).json({
        status: "Error",
        message: "Invalid email",
      });
    }

    const isMatch = await User.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        status: "Error",
        message: "Invalid password",
      });
    }

    const { password: _, ...userData } = user.toObject();

    res.status(200).json({
      status: "Success",
      message: "Signin successfully",
      user: userData,
    });
  } catch (error) {
    console.error("Signin Error", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};