const express = require("express");
const { verifyEmail } = require("../controller/email-verificationcontroller");
const { userLogin } = require("../controller/userController");

const router = express.Router();

router.get("/verify/:token", verifyEmail);
router.post("/login", userLogin);

module.exports = router;
