const { check } = require("express-validator");

const schema = [
  check("email", "Email length should be 3 to 30 characters")
    .isEmail()
    .normalizeEmail()
    .isLength({ min: 10, max: 30 }),
  check("name", "Name length should be 3 to 20 characters").isLength({
    min: 3,
    max: 30,
  }),
  check("mobile", "Mobile number should contains 10 digits")
    .isLength({
      min: 10,
      max: 10,
    })
    .isNumeric(),
  check("password", "Password length should be 8 to 10 characters").isLength({
    min: 5,
    max: 20,
  }),
];
module.exports = schema;
