const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const validateSchema = require("../Middleware/validationResult");
const { formSchema } = require("../schema/validationSchema");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: true }));

router.get("/validator", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "formValidation.html"));
});

router.post("/validator", formSchema, validateSchema, (req, res) => {
  res.send("Successfully validated");
});

module.exports = router;
