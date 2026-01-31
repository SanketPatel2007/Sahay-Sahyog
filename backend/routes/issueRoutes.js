const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createIssue, getIssues } = require("../controllers/issueController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/", upload.single("image"), createIssue);
router.get("/", getIssues);

module.exports = router;
