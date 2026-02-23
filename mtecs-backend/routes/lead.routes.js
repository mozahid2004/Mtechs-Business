import express from "express";
import auth from "../middleware/auth.middleware.js";

import {
  getAllLeads,
  createLead,
  updateLeadStatus,
  deleteLead
} from "../controllers/lead.controller.js";

const router = express.Router();

router.get("/", auth, getAllLeads);
router.post("/", createLead);
router.patch("/:id", auth, updateLeadStatus);
router.delete("/:id", auth, deleteLead);

export default router;