const express = require("express");
const router = express.Router();
const {
 sendToken,
 verifyToken,
 Signup,
 Login,
} = require("../Controllers/userController");

router.post("/signup", Signup);
router.get("/verify/:token", verifyToken);
router.post("/login", Login);

module.exports = router;
