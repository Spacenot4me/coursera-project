const express = require("express");
const { books } = require("../data.json");

const router = express.Router();

router.get("/:title", (req, res) => {
  const book = books.find((b) => b.title === req.params.title);
  if (book) res.json(book);
  else res.status(404).json({ error: "Book not found" });
});

module.exports = router;
