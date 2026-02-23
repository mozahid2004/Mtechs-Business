import Lead from "../models/lead.model.js";

/**
 * @desc Create new lead
 * @route POST /api/leads
 * @access Public (or Private if you later add auth middleware)
 */
export const createLead = async (req, res) => {
  try {
    // Create new lead document using request body data
    const lead = await Lead.create(req.body);

    // Send success response with created lead data
    res.status(201).json({
      success: true,
      message: "Lead saved",
      data: lead
    });

  } catch (error) {
    // If any error occurs during DB operation
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};


/**
 * @desc Get all leads
 * @route GET /api/leads
 * @access Private (recommended for admin dashboard)
 */
export const getAllLeads = async (req, res) => {
  try {
    // Fetch all leads sorted by newest first
    const leads = await Lead.find().sort({ createdAt: -1 });

    // Send leads list
    res.status(200).json({
      success: true,
      data: leads
    });

  } catch (error) {
    // Handle server/database errors
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};


export const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateLeadStatus = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: "Contacted" },
      { new: true }
    );
    res.json(lead);
  } catch {
    res.status(500).json("Error");
  }
};