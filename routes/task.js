import express from "express";
import { newTask, getAllTask, updateTask, deleteTask } from "../controllers/task.js";
import { isAutheticated } from "../middleware/Auth.js";
const Router = express.Router();

Router.post('/new', isAutheticated, newTask);
Router.get('/my', isAutheticated, getAllTask);
Router.route('/:id').put(isAutheticated, updateTask).delete(isAutheticated, deleteTask);

export default Router;