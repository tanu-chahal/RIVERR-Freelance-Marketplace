import express from 'express';
import {deleteUser, getUser} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/verifyToken.js"
const router = express.Router();

router.delete("/:id",verifyToken, deleteUser);
router.get("/:id", getUser);//verifyToken removed by me

export default router;