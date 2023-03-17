const express = require(`express`);
const router = express.Router();
const bcrypt = require("bcrypt");

const example = [];
router.get("/example", (req, res) => {
  res.json(example);
});
router.post("/example", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const data = {
      name: req.body.name,
      password: hashedPassword,
    };
    example.push(data);
    res.status(201).json(example);
  } catch {
    res.status(500).send();
  }
});
router.post("/example/login", async (req, res) => {
  const userData = example.find((user) => user.name === req.body.name);
  if (userData == null) {
    res.status(404).send("User not found");
  }
  try {
    if (await bcrypt.compare(req.body.password, userData.password)) {
      res.send("success");
    } else {
      res.send("Not allowed");
    }
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
