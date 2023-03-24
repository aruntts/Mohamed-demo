const { check, body } = require("express-validator");
const crudSchema = [
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
const formSchema = [
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
const RegisteruserSchema = [
  body("name", "name is mandaotry").notEmpty(),
  body("email", "Enter valid address")
    .normalizeEmail()
    .isEmail()
    .isLength({ min: 10, max: 30 }),
  body("password", "Password is invalid").isLength({ min: 8, max: 20 }),
];
const loginUserSchema = [
  body("email", "Enter valid address")
    .normalizeEmail()
    .isEmail()
    .isLength({ min: 10, max: 30 }),
  body("password", "Password is invalid").isLength({ min: 8, max: 20 }),
];
module.exports = {
  crudSchema,
  RegisteruserSchema,
  formSchema,
  loginUserSchema,
};
