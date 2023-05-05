import express from 'express';
const router = express.Router();

import {
    createGig,
    deleteGig,
    getGig,
    getGigs
} from "../controllers/gig.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;