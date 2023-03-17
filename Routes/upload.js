const express = require(`express`);
const router = express.Router();
const rootDir = require(`../utils/path`);
const path = require(`path`);
const errorHandler = require("../Middleware/errorHandler");
const multer = require(`multer`);

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (res, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1000 * 1000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      return cb(new Error("Invalid mime type"));
    }
  },
});

router.get("/uploads", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "upload.html"));
});
router.use(errorHandler);

const uploadImage = upload.array("image", 3);

router.post("/uploads", (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.log({ status: 400, message: err.message });
      return res.status(400).json({ status: 400, message: err.message });
    }
    res.status(200).send(req.files);
  });
});
router.use(errorHandler);
module.exports = router;
