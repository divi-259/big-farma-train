import exp from "constants";
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createCheckoutSession } from "../controllers/payment.controller.js";
import { checkoutSuccess } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/create-success", protectRoute, checkoutSuccess);

export default router;
