const express = require("express");
const axios = require("axios");

const router = express.Router();

// Simulating an external API
const BOOKS_API = "http://localhost:3000/task1";

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(BOOKS_API);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books", details: error.message });
  }
});

module.exports = router;
