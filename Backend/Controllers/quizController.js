const expressAsyncHandler = require("express-async-handler");
const QuizData = require("../Modals/quizModal");

const createUserQuizData = expressAsyncHandler(async (req, res) => {
 const { type, quizType, difficulty, totalQuestions, correct_answers, score } =
  req.body;
 if (
  !type ||
  !quizType ||
  !difficulty ||
  !totalQuestions ||
  !correct_answers ||
  !score
 ) {
  res.status(400);
  throw new Error("All fields are required");
 }
 const quizData = await QuizData.create({
  user_id: req.params.id,
  type,
  quizType,
  difficulty,
  totalQuestions,
  correct_answers,
  score,
 });
 res.status(200).json(quizData);
 if (!quizData) {
  res.status(400);
  throw new Error("Quiz Data not created");
 }
});

const getQuizData = expressAsyncHandler(async (req, res) => {
 const quizData = await QuizData.find({ user_id: req.params.id });
 if (!quizData) {
  res.status(400).json({ message: "Quiz Data not found" });
  throw new Error("Quiz Data not found");
 }
 res.status(200).json(quizData);
});

module.exports = { createUserQuizData, getQuizData };
