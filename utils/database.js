import mongoose from "mongoose";
//Database connection
export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "backendapi",
        })
        .then((c) => console.log(`Database Connect ${c.connection.host}`))
        .catch((e) => console.log(e));
}
