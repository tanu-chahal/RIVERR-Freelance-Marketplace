import createError from "../utils/createError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.accessToken;
    if(!token) return next(createError(401,"You're not logged in."));

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload)=>{
        if(err) return next(createError(403, "Token is not valid."));
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next();
    });
};