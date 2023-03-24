const express = require("express");
const router = express.Router();
const {
  RegisteruserSchema,
  loginUserSchema,
} = require("../schema/validationSchema");
const crudValidationResult = require("../Middleware/validationResult");
const validateToken = require("../Middleware/validateToken");
const {
  getUsers,
  createUser,
  loginUser,
  currentUser,
} = require("../controllers/userAuthenticationController");
router.get("/userList", getUsers);
router.post("/register", RegisteruserSchema, crudValidationResult, createUser);
router.post("/login", loginUserSchema, crudValidationResult, loginUser);
router.get("/currentUser", validateToken, currentUser);
module.exports = router;
