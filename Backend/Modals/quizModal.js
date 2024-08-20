const mongoose = require("mongoose");

const quizScehema = mongoose.Schema(
 {
  user_id: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: "User",
  },
  type: {
   type: String,
   required: [true, "Type is required"], //multi //boolean
  },
  quizType: {
   type: String,
   required: [true, "Quiz Type is required"], //name of quiz
  },
  difficulty: {
   type: String,
   required: [true, "Difficulty is required"],
  },
  totalQuestions: {
   type: Number,
   required: [true, "Total Questions is required"],
  },
  correct_answers: {
   type: Number,
   required: [true, "Correct Answers is required"],
  },
  score: {
   type: Number,
   required: [true, "Score is required"],
  },
 },

 {
  timestamps: true,
 }
);

module.exports = mongoose.model("QuizData", quizScehema);
