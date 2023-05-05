import express from 'express';
const router = express.Router();
import {
    getConversations,
    getConversation,
    createConversation,
    updateConversation
} from "../controllers/conversation.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

router.get("/",verifyToken, getConversations);
router.get("/single/:id",verifyToken, getConversation);
router.post("/",verifyToken, createConversation);
router.put("/:id",verifyToken, updateConversation);

export default router;