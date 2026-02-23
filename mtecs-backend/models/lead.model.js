import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    service: String,
    message: String,
    status: {
      type: String,
      default: "New"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);



// http://localhost:5000/api/leads