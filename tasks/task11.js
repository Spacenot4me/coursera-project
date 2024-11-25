const express = require("express");
const axios = require("axios");

const router = express.Router();

// Simulating an external API
const BOOKS_API = "http://localhost:3000/task2";

router.get("/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  axios
    .get(`${BOOKS_API}/${isbn}`)
    .then((response) => res.json(response.data))
    .catch((error) =>
      res.status(500).json({ error: "Failed to fetch book by ISBN", details: error.message })
    );
});

module.exports = router;
