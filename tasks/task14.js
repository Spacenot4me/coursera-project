const express = require("express");

const router = express.Router();

let projectLink = null;

// Add GitHub Project Link
router.post("/", (req, res) => {
  const { link } = req.body;

  if (!link) {
    return res.status(400).json({ error: "GitHub link is required" });
  }

  projectLink = link;
  res.json({ message: "GitHub link submitted successfully", link });
});

// Get GitHub Project Link
router.get("/", (req, res) => {
  if (!projectLink) {
    return res.status(404).json({ error: "No GitHub link submitted" });
  }

  res.json({ link: projectLink });
});

module.exports = router;
