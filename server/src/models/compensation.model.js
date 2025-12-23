import mongoose from "mongoose";

const CompensationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    payroll: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payroll",
      required: true,
    },

    // Rates & Workdays
    rates: {
      dailyRate: {
        type: Number,
        required: true,
      },
      hourlyRate: {
        type: Number,
        required: true,
      },
      regularDaysWorked: {
        type: Number,
        required: true,
      },
      absent: {
        type: Number,
        default: 0,
      },
      late: {
        type: Number,
        default: 0,
      },
    },

    // Basic Pay & Adjustments
    basciPay: {
      base: {
        type: Number,
        default: 0,
      },
      regHoliday: {
        type: Number,
        default: 0,
      },
      speHoliday: {
        type: Number,
        default: 0,
      },

      adjustments: {
        unpadiWork: {
          type: Number,
          default: 0,
        },
        rateIncrease: {
          type: Number,
          default: 0,
        },
        absentAmount: {
          type: Number,
          default: 0,
        },
        tardyAmount: {
          type: Number,
          default: 0,
        },
        lateAmount: {
          type: Number,
          default: 0,
        },
      },

      total: {
        type: Number,
        default: 0,
      },
    },

    // Overtime
    overtime: {
      regOT: {
        type: Number,
        default: 0,
      },
      restDayOT: {
        type: Number,
        default: 0,
      },
      rdOTExcess8Pay: {
        type: Number,
        default: 0,
      },
      regHolidayPay: {
        type: Number,
        default: 0,
      },
      specHolidayPay: {
        type: Number,
        default: 0,
      },
      total: {
        type: Number,
        default: 0,
      },
    },

    // Night Differential
    nightDiff: {
      regOTNDPay: {
        type: Number,
        default: 0,
      },
      restdayNDPay: {
        type: Number,
        default: 0,
      },
      regHolNDPay: {
        type: Number,
        default: 0,
      },
      specHolNDPay: {
        type: Number,
        default: 0,
      },
      totalSupplementaryIncome: {
        type: Number,
        default: 0,
      },
    },

    // Allowances & Bonuses
    bonuses: {
      nonTaxableAllowance: {
        type: Number,
        default: 0,
      },
      performanceBonus: {
        type: Number,
        default: 0,
      },
    },

    // Deductions
    deductions: {
      sssEmployeeShare: {
        type: Number,
        default: 0,
      },
      wisp: {
        type: Number,
        default: 0,
      },
      totalSSSContribution: {
        type: Number,
        default: 0,
      },
      phicEmployeeShare: {
        type: Number,
        default: 0,
      },
      hdmfEmployeeShare: {
        type: Number,
        default: 0,
      },
      phicAdjustment: {
        type: Number,
        default: 0,
      },
      withholdingTax1601C: {
        type: Number,
        default: 0,
      },
      sssSalaryLoan: {
        type: Number,
        default: 0,
      },
      hdmfLoan: {
        type: Number,
        default: 0,
      },
      otherCashAdvance: {
        type: Number,
        default: 0,
      },
      advancesPerformanceBonus: {
        type: Number,
        default: 0,
      },
      totalDeduction: {
        type: Number,
        default: 0,
      },
    },

    // Summary
    grossSalary: {
      type: Number,
      default: 0,
    },
    netPay: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Compensation", CompensationSchema);
