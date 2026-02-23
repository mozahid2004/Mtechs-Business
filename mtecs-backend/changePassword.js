import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

// choose new strong password
const newPassword = "Mtecs@Secure#2026";

const hash = await bcrypt.hash(newPassword,10);

await Admin.updateOne(
 { email:"admin@gmail.com" },
 { $set:{ password:hash } }
);

console.log("Password updated");
process.exit();