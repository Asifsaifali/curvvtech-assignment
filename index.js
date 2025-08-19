import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/users", userRoutes);


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
    process.exit(1);
  }
};

startServer();
