const express = require("express");
const axios = require("axios");

const router = express.Router();

// Simulating an external API
const BOOKS_API = "http://localhost:3000/task3";

router.get("/:author", async (req, res) => {
  try {
    const author = req.params.author;
    const response = await axios.get(`${BOOKS_API}/${author}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books by author", details: error.message });
  }
});

module.exports = router;
