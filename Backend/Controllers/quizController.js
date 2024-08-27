const expressAsyncHandler = require("express-async-handler");
const QuizData = require("../Modals/quizModal");
const userModal = require("../Modals/userModal");
const quizModal = require("../Modals/quizModal");

const createUserQuizData = expressAsyncHandler(async (req, res) => {
 const { quizInfo } = req.body;
 if (!quizInfo || !quizInfo[0]) {
  res.status(400);
  throw new Error("All fields are required");
 }
 const { type, quizType, difficulty, totalQuestions, correct_answers, score } =
  quizInfo[0];

 const checkQuizData = await QuizData.findOne({ user_id: req.params.id });
 if (checkQuizData) {
  checkQuizData.totalScore += score;
  checkQuizData.quizInfo.push({
   type,
   quizType,
   difficulty,
   totalQuestions,
   correct_answers,
   score,
  });
  await checkQuizData.save();
  res.status(201).json({ message: "Quiz Data Updated" });
 } else {
  const newQuizData = new QuizData({
   user_id: req.params.id,
   totalScore: score,
   quizInfo: [
    {
     type,
     quizType,
     difficulty,
     totalQuestions,
     correct_answers,
     score,
    },
   ],
  });
  await newQuizData.save();
  res.status(201).json({ message: "Quiz Data Created" });
 }
});

const getQuizData = expressAsyncHandler(async (req, res) => {
 const quizData = await QuizData.find({ user_id: req.params.id });
 if (!quizData) {
  res.status(404);
  throw new Error("Quiz Data not found");
 }
 res.json(quizData);
});

const getQuizDataByCat = expressAsyncHandler(async (req, res) => {
 const user_id = req.params.id;
 const quizType = req.body.quizType;
 const quizData = await QuizData.findOne({
  user_id: user_id,
 });
 if (!quizData) {
  res.status(404);
  throw new Error("Quiz Data not found");
 }

 const quizInfo = quizData.quizInfo.filter(
  (item) => item.quizType === quizType
 );

 res.json(quizInfo);
});

const getPlayersNumber = expressAsyncHandler(async (req, res) => {
 const numOfPlayers = await userModal.find().countDocuments();
 res.json(numOfPlayers);
});

const rankPlayers = expressAsyncHandler(async (req, res) => {
 const players = await quizModal.find().sort({ totalScore: -1 });
 const username = await userModal.find(players.user_id);

 const userData = username.map((item) => ({
  user_id: item._id,
  username: item.username,
 }));

 const playersData = players.map((item, index) => ({
  totalScore: item.totalScore,
  rank: index + 1,
  username: userData[index].username,
 }));
 res.json(playersData);
});

module.exports = {
 createUserQuizData,
 getQuizData,
 getQuizDataByCat,
 getPlayersNumber,
 rankPlayers,
};
