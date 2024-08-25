const expressAsyncHandler = require("express-async-handler");
const QuizData = require("../Modals/quizModal");
const userModal = require("../Modals/userModal");

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

module.exports = {
 createUserQuizData,
 getQuizData,
 getQuizDataByCat,
 getPlayersNumber,
};
