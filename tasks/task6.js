const express = require("express");
const fs = require("fs");
const { users } = require("../data.json");

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (users.some((user) => user.username === username)) {
    res.status(400).json({ error: "User already exists" });
  } else {
    users.push({ username, password });
    fs.writeFileSync("./data.json", JSON.stringify({ users }, null, 2));
    res.status(201).json({ message: "User registered successfully" });
  }
});

module.exports = router;
    