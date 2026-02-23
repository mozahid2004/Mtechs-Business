import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginAdmin = async(req,res)=>{
  const {email,password} = req.body;

  const admin = await Admin.findOne({email});
  if(!admin) return res.status(404).json("Admin not found");

  const match = await bcrypt.compare(password,admin.password);
  if(!match) return res.status(401).json("Wrong password");

  const token = jwt.sign({id:admin._id},"SECRET",{expiresIn:"1d"});
  res.json({token});
};