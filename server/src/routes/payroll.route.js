import { Router } from "express";
import * as PayrollController from "../controllers/payroll.controller.js";
import * as CompensationController from "../controllers/compensation.controller.js";

const router = Router();

{
  /** Payroll Routes */
}
router.post("/payrolls", PayrollController.store);
router.get("/payrolls", PayrollController.index);
router.get("/payrolls/:id", PayrollController.show);
router.put("/payrolls/:id", PayrollController.update);
router.delete("/payrolls/:id", PayrollController.destroy);

{
  /** Compensation Routes */
}
router.post("/compoensations", CompensationController.store);
router.get("/compoensations", CompensationController.index);
router.get("/compoensations/:id", CompensationController.show);
router.put("/compoensations/:id", CompensationController.update);
router.delete("/compoensations/:id", CompensationController.destroy);

export default router;
