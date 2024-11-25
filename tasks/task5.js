const express = require("express");
const { books } = require("../data.json");

const router = express.Router();

router.get("/:isbn/reviews", (req, res) => {
  const book = books.find((b) => b.isbn === req.params.isbn);
  if (book) res.json(book.reviews);
  else res.status(404).json({ error: "Book not found" });
});

module.exports = router;
