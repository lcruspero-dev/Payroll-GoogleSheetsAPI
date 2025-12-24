import { Router } from "express";
import * as PayrollController from "../controllers/payroll.controller.js";
import * as CompensationController from "../controllers/compensation.controller.js";

const router = Router();

/** Payroll Routes */
router.post("/", PayrollController.store);
router.get("/", PayrollController.index);
router.get("/:id", PayrollController.show);
router.put("/:id", PayrollController.update);
router.delete("/:id", PayrollController.destroy);

/** Compensation Routes */
router.post("/compensations", CompensationController.store);
router.get("/compensations", CompensationController.index);
router.get("/compensations/:id", CompensationController.show);
router.put("/compensations/:id", CompensationController.update);
router.delete("/compensations/:id", CompensationController.destroy);

export default router;
