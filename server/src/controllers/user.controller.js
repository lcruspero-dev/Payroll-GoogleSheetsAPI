import User from "../models/user.model.js";

export const index = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      status: "Success",
      message: "Users fetch successfully",
      users,
    });
  } catch (error) {
    console.error("Fetch users error", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

export const show = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "User fetch successfully",
      user,
    });
  } catch (error) {
    console.error("Fetch user error", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};


