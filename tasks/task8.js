const express = require("express");
const fs = require("fs");
const data = require("../data.json");

const router = express.Router();

router.post("/:isbn/reviews", (req, res) => {
  const { review } = req.body;
  const book = data.books.find((b) => b.isbn === req.params.isbn);

  if (book) {
    book.reviews.push(review);
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
    res.status(200).json({ message: "Review added successfully", reviews: book.reviews });
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

module.exports = router;
