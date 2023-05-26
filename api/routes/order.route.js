import express from 'express';
const router = express.Router();
import {
    getOrders,
    intent,
    confirm
} from "../controllers/order.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

router.get("/",verifyToken, getOrders)
router.post("/create-payment-intent/:id",verifyToken,intent);
router.put("/",verifyToken,confirm);


export default router;