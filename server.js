import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// import routes from folder Router-->
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
//config
import connectDB from "./config/db.js";
dotenv.config();

//connect db
connectDB();


// creat express app
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Test Route
app.get("/",(req,res)=>{
    res.send("Smart Todo API is running");
});

//use all routes -->
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

//start server
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`app listing to the port ${PORT}`)
});
