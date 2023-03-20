const express = require("express");
const router = express.Router();
router.use(express.json());
const jwt = require("jsonwebtoken");
require("dotenv").config();

const posts = [
  {
    name: "mohamed",
    title: "post 1",
  },
  {
    name: "dhaanish",
    title: "post 2",
  },
];
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, userDetails) => {
    if (err) {
      res.sendStatus(403);
    }
    req.userDisplay = userDetails;
    next();
  });
};
router.get("/", (req, res) => {
  res.json(posts);
});
router.post("/login", (req, res) => {
  const userDetails = { name: req.body.name };
  const accessToken = jwt.sign(userDetails, process.env.ACCESS_TOKEN);
  res.json({ accessToken: accessToken });
});
router.post("/login/posts", authenticateToken, (req, res) => {
  console.log(req.userDisplay.name);
  const check = posts.filter((nabar) => nabar.name === req.userDisplay.name);
  if (check) {
    res.json(check);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
