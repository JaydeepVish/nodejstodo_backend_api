import Jwt from "jsonwebtoken";
import { User } from "../models/users.js";

export const isAutheticated = async (req, res, next) => {
    const token = req.cookies;
    const value = Object.keys(token);
    if (!value[0]) {
        return res.status(404).json({
            success: false,
            message: 'Login First'
        });
    }
    const decoded = Jwt.verify(value[0], process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
}