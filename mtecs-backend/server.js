import express from "express";
import cors from "cors";
// connection of MongoDB
import { connectDB } from "./config/db.js";
// Routes
import dotenv from "dotenv";
import leadRoutes from "./routes/lead.routes.js";
import adminRoutes from "./routes/admin.routes.js";


dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// middleware ke baad
// main route
app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes);


// MongoDB Connection
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("MTECS Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

