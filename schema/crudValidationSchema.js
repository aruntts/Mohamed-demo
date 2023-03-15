const { check } = require("express-validator");
const schema = [
  check("name", "Name should contain atleast 3 characters").isLength({
    min: 3,
  }),
  check("email", "Mail address should be valid address")
    .isLength({ min: 10, max: 30 })
    .isEmail(),
  check("phone", "phone number is not valid")
    .isNumeric()
    .isLength({ min: 10, max: 10 }),
];

module.exports = schema;
