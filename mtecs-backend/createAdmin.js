import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.model.js";

await mongoose.connect("mongodb+srv://mtecs101_db_user:4e6afTpFnSyQJoKV@mtecs-cluster.gdu95wn.mongodb.net/mtecs_db?appName=mtecs-cluster");

const hash = await bcrypt.hash("admin123",10);

await Admin.create({
 email:"admin@gmail.com",
 password:hash
});

console.log("Admin created");
process.exit(); 