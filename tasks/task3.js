const express = require("express");
const { books } = require("../data.json");

const router = express.Router();

router.get("/:author", (req, res) => {
  const authorBooks = books.filter((b) => b.author === req.params.author);
  if (authorBooks.length) res.json(authorBooks);
  else res.status(404).json({ error: "No books found for this author" });
});

module.exports = router;
