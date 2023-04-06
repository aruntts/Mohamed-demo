const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  getById,
  updateAll,
  deleteAll,
} = require("../controllers/mongoCRUDController");
router.route("/").get(getAll).post(create);
router.route("/:_id").get(getById).put(updateAll).delete(deleteAll);
module.exports = router;
