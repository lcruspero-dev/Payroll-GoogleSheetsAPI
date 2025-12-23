import Compensation from "../models/compensation.model.js";
import Payroll from "../models/payroll.model.js";


export const store = async (req, res) => {
    try {
        const {
            user, 
            payroll, 
            rates, 
            basciPay, 
            overtime, 
            nightDiff, 
            bonuses, 
            deductions, 
            grossSalary, 
            netPay
        } = req.body;

        


    } catch (error) {
        
    }
}