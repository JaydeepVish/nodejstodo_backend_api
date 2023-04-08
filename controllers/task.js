import ErrorHandler from "../middleware/Error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = await Task.create({
            title,
            description,
            user: req.user
        });
        if (!user) {
            return next(new ErrorHandler('Unable to Create', 404))
        };
        res.status(201).json({
            success: true,
            message: 'Task Created Successfully'

        });
    } catch (error) {
        next(error);
    }
}

export const getAllTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await Task.find({
            user: userId
        });
        if (!user) {
            return next(new ErrorHandler('User Not Found', 404))
        };
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return next(new ErrorHandler('Task Not Found', 404))
        };
        task.isCompleted = !task.isCompleted;
        await task.save();

        res.status(200).json({
            success: true,
            message: 'Update Successfully'
        });
    } catch (error) {
        next(error);
    }

}

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return next(new ErrorHandler('Task Not Found', 404))
        };
        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: 'Deleted Successfully'
        });
    } catch (error) {
        next(error);
    }
}