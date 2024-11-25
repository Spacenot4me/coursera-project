const express = require("express");
const axios = require("axios");

const router = express.Router();

// Simulating an external API
const BOOKS_API = "http://localhost:3000/task4";

router.get("/:title", (req, res) => {
  const title = req.params.title;

  axios
    .get(`${BOOKS_API}/${title}`)
    .then((response) => res.json(response.data))
    .catch((error) =>
      res.status(500).json({ error: "Failed to fetch book by title", details: error.message })
    );
});

module.exports = router;
