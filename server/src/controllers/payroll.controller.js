import Payroll from "../models/payroll.model.js";

export const store = async (req, res) => {
  try {
    const { user, salary, payPeriod } = req.body;

    const payroll = new Payroll({ user, salary, payPeriod });
    await payroll.save();

    res.status(201).json({
      status: "Success",
      message: "Created payroll successfully",
      payroll,
    });
  } catch (error) {
    console.error("Error creating payroll", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

export const index = async (req, res) => {
  try {
    const payrolls = await Payroll.find().populate("user");
    res.status(200).json({
      status: "Success",
      message: "Fetch payrolls successfully",
      payrolls,
    });
  } catch (error) {
    console.error("Error fetching payrolls", error);
    res.status(500).json({
      status: "Error",
      message: "Error fetching payrolls",
    });
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const payroll = await Payroll.findById(id).populate("user");

    if (!payroll)
      return res.status(404).json({
        status: "Error",
        message: "Payroll not found",
      });

    res.status(200).json({
      status: "Success",
      message: "Fetch payroll successfully",
      payroll,
    });
  } catch (error) {
    console.error("Failed fetching payroll", error);
    res.status(500).json({
      status: "Error",
      message: "Error fetching payroll",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const payroll = await Payroll.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!payroll)
      return res.status(404).json({
        status: "Success",
        message: "Payroll not found",
      });

    res.status(200).json({
      status: "Success",
      message: "Update payroll successfully",
    });
  } catch (error) {
    console.error("Failed to update payroll", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const payroll = await Payroll.findByIdAndDelete(id);

    if (!payroll)
      return res.status(404).json({
        status: "Success",
        message: "Payroll not found",
      });

    res.status(200).json({
      status: "Success",
      mesage: "Delete payroll successfully",
    });
  } catch (error) {
    console.error("Failed to dekete payroll", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
