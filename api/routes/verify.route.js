import express from 'express';
const router = express.Router();
import {verifyToken} from "../middleware/verifyToken.js";
// import { getUser} from "../controllers/user.controller.js";

router.get("/", verifyToken);

export default router;