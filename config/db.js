import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    }catch(error){
        console.error("Database connection failed");
    }
};

export default connectDB;