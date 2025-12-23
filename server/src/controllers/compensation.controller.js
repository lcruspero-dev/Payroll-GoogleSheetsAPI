import Compensation from "../models/compensation.model.js";
import Payroll from "../models/payroll.model.js";

export const index = async (req, res) => {
  try {
    const compensations = Compensation.find().populate("user payroll");
    res.status(200).json({
      status: "Success",
      message: "Fetch compenstations successfully",
      compensations,
    });
  } catch (error) {
    console.error("Error fetching compensations", error);
    res.status(500).json({
      status: "Success",
      message: "Internal Server Error",
    });
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const compensation = await Compensation.findById(id).populate(
      "user payroll"
    );
    if (!compensation)
      return res.status(404).json({
        status: "Error",
        message: "Compensation not found",
      });

    res.status(200).json({
      status: "Success",
      message: "Fetch Compensation successfully",
      compensation,
    });
  } catch (error) {}
};

export const store = async (req, res) => {
  try {
    const {
      user,
      payroll,
      rates,
      basicPay,
      overtime,
      nightDiff,
      bonuses,
      deductions,
      grossSalary,
      netPay,
    } = req.body;

    const existingPayroll = await Payroll.findById(payroll);
    if (!existingPayroll)
      return res.status(404).json({
        status: "Error",
        message: "Payroll not found",
      });

    const compensation = new Compensation({
      user,
      payroll,
      rates,
      basicPay,
      overtime,
      nightDiff,
      bonuses,
      deductions,
      grossSalary,
      netPay,
    });

    await compensation.save();

    res.status(201).json({
      status: "Success",
      message: "Created compensation successfully",
    });
  } catch (error) {
    console.error("", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const compensation = await Compensation.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!compensation)
      return res.status(404).json({
        status: "Success",
        message: "Compensation not found",
      });

    res.status(200).json({
      status: " Success",
      message: "Update compensation successfully",
      compensation,
    });
  } catch (error) {
    console.error("Failed to update compensation", error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const compensation = await Compensation.findByIdAndDelete(id);

    if (!compensation)
      return res.status(404).json({
        status: "Error",
        message: "Compensation not found",
      });

    return res.status(200).json({
      status: "Success",
      message: "Compensation deleted successfully",
      compensation,
    });
  } catch (error) {
    console.error("Failed to delete compensation", error);

    res.status(500).json({
      status: "Success",
      message: "Internal Server Error",
    });
  }
};
