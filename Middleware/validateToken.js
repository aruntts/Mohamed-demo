const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = async (req, res, next) => {
  let authHeader = req.headers.Authorization || req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  jwt.verify(token, `${process.env.ACCESS_TOKEN_SECERT}`, (err, user) => {
    if (err) {
      res.status(401).send("User is not authorized");
      throw new Error("User is not authorized");
    }
    req.user = user;
    next();
  });

  if (!token) {
    res.status(401).send("User is not authorized or token is missing");
    throw new Error("User is not authorized or token is missing");
  }
};

module.exports = validateToken;
