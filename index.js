import express from "express"
import connectDB from "./src/config/db.config.js";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()



connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})