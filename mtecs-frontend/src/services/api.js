import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


console.log("API URL:", API_URL); // should log http://localhost:5000

export const submitLead = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/api/leads`, data);
    return res.data;
  } catch (err) {
    console.error("Error submitting lead:", err);
    throw err;
  }
};
