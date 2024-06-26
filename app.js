import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";
import cors from "cors";
const app = express();
dotenv.config();

// app.use("/",(req,res,next) => {
//     res.send("<h1>Hi<h1>");
// });



// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);


mongoose
    .connect(
        `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster1.rgvbpyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
    )
    .then(() =>
        app.listen(5000, () =>
        console.log("Connected To Database And Server is running")
        )
    )
    .catch((e) => console.log(e));

app.listen(5001,() => {
    console.log(`Connected to Localhost Port ${5001}`);
});


// drXjBxDCG3PZtbh5