import express from "express";
import userRouter from './routes/users.js';
import taskRouter from './routes/task.js';
import { config } from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middleware/Error.js";
//intiate express
export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);


config({
  path: './.env'
});

//route start
app.get("/", (req, res) => {
  res.send("Nice working....");
});

app.use(errorMiddleware);

