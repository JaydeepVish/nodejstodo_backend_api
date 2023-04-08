import mongoose from "mongoose";
//Database connection
export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "backendapi",
        })
        .then(() => console.log("Database Connect...."))
        .catch((e) => console.log(e));
}
