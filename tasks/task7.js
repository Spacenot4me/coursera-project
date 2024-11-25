const express = require("express");
const { users } = require("../data.json");

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) res.json({ message: "Login successful" });
  else res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
