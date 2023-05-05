import express from 'express';
const router = express.Router();
import {
    getMessages,
    createMessage,
} from "../controllers/message.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

router.post("/",verifyToken, createMessage);
router.get("/:id",verifyToken, getMessages);

export default router;