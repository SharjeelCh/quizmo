export const findingCorrectAnswer = (apiData, userData) => {
 let correctAnswers = 0;

 Object.keys(userData).forEach((key) => {
  if (
   !isNaN(key) &&
   apiData[key] &&
   apiData[key].correct_answer !== undefined
  ) {
   if (apiData[key].correct_answer === userData[key]) {
    correctAnswers++;
   }
  }
 });

 return correctAnswers;
};
export const scoreLogic = (diificulty, totalQuestions, correctAnswers) => {
 let score = 0;
 if (diificulty === "easy") {
  score = correctAnswers * 2;
 } else if (diificulty === "medium") {
  score = correctAnswers * 4;
 } else if (diificulty === "hard") {
  score = correctAnswers * 7;
 }
 
 return score;
};
