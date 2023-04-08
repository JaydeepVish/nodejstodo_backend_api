import express from "express";
import { registerUser, login, getProfile, logout } from "../controllers/user.js";
import { isAutheticated } from "../middleware/Auth.js";

const Route = express.Router();

Route.post("/login", login);
Route.post("/logout", logout);

Route.post("/new", registerUser);
Route.get("/me", isAutheticated, getProfile);


export default Route;