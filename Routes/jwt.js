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
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      res.sendStatus(401);
    }
    req.users = user;
    next();
  });
};
router.get("/", (req, res) => {
  res.json(posts);
});
router.post("/login", (req, res) => {
  const user = { name: req.body.name };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json({ accessToken: accessToken });
});
router.post("/login/posts", authenticateToken, (req, res) => {
  console.log(req.users.name);
  res.json(posts.filter((nabar) => nabar.name === req.users.name));
});

module.exports = router;
