// backend/routes/supervisorRoutes.js
const express = require("express");
const router = express.Router();
const Supervisor = require("../models/Supervisor");

// GET /api/supervisors
router.get("/", async (req, res) => {
  try {
    console.log("🔍 Fetching all supervisors...");
    const supervisors = await Supervisor.find();
    console.log("✅ Supervisors fetched:", supervisors);
    res.json(supervisors);
  } catch (error) {
    console.error("❌ Error fetching supervisors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
