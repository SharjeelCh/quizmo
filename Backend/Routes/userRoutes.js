const express = require("express");
const router = express.Router();
const {
 sendToken,
 verifyToken,
 Signup,
 Login,
} = require("../Controllers/userController");
const {
 createUserQuizData,
 getQuizData,
 getQuizDataByCat,
 getPlayersNumber,
} = require("../Controllers/quizController");

router.post("/signup", Signup);
router.get("/verify/:token", verifyToken);
router.post("/login", Login);
router.post("/insertQuiz/:id", createUserQuizData);
router.get("/getQuizData/:id", getQuizData);
router.get("/getQuizDataByCat/:id", getQuizDataByCat);
router.get("/getNumOfPlayers",getPlayersNumber);

module.exports = router;
