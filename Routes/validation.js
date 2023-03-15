const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const validateSchema = require("../Middleware/formValidationResult");
const schema = require("../schema/formValidationSchema");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: true }));

router.get("/validator", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "formValidation.html"));
});

router.post("/validator", schema, validateSchema, (req, res) => {
  res.send("Successfully validated");
});

module.exports = router;
