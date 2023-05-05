import express from 'express';
const router = express.Router();

import {
    createReview,
    deleteReview,
    getReviews
} from "../controllers/review.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

router.post("/",verifyToken, createReview);
router.get("/:gigId", getReviews); //we're passing here our gig id okay.
router.delete("/:id",verifyToken, deleteReview); //& here we're passing review id, got it.

export default router;