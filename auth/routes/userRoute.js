const express = require("express");
const router = express.Router();
router.use(express.json());

const path = require("path");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ Storage: Storage });
const usercontroller = require("../controller/userController");
router.post("/register", upload.single("image"), usercontroller.userRegister);
router.post("/loginwithgoogle", usercontroller.signinWithGoogleController);

module.exports = router;
