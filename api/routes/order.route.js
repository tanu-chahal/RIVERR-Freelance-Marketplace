import express from 'express';
const router = express.Router();
import {
    getOrders,
    createOrder
} from "../controllers/order.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

router.get("/",verifyToken, getOrders)
router.post("/:gigId",verifyToken, createOrder);


export default router;