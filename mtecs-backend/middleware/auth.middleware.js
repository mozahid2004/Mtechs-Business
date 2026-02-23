import jwt from "jsonwebtoken";

export default function(req,res,next){
  const token = req.headers.authorization;

  if(!token) return res.status(401).json("No token");

  try{
    const decoded = jwt.verify(token,"SECRET");
    req.admin = decoded;
    next();
  }catch{
    res.status(401).json("Invalid token");
  }
}