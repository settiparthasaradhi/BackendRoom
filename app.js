import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Fix CORS issue
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.listen(5000, () => console.log(`Server running on port 5000`));