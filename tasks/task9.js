const express = require("express");
const fs = require("fs");
const data = require("../data.json");

const router = express.Router();

router.delete("/:isbn/reviews/:index", (req, res) => {
  const { isbn, index } = req.params;
  const book = data.books.find((b) => b.isbn === isbn);

  if (book) {
    if (index >= 0 && index < book.reviews.length) {
      const deletedReview = book.reviews.splice(index, 1); // Remove the review by index
      fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
      res.status(200).json({ message: "Review deleted successfully", deletedReview });
    } else {
      res.status(400).json({ error: "Invalid review index" });
    }
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

module.exports = router;
