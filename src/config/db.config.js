import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        if(connect){
            console.log("Database connected successfully");
        }
    } catch (error) {
        console.log("Connection failed", error)
    }
}

export default connectDB;