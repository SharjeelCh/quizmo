import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
 Box,
 Button,
 Typography,
 List,
 ListItem,
 ListItemText,
 ListItemIcon,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const QuizResult = () => {
 const location = useLocation();
 const navigate = useNavigate();
 const { quizes, userQuizData, score } = location.state;
 console.log(userQuizData)

 const correctAnswers = quizes.reduce((total, quiz, index) => {
  if (quiz.correct_answer === userQuizData[index]) {
   return total + 1;
  }
  return total;
 }, 0);

 const scorePercentage = (correctAnswers / quizes.length) * 100;

 const getEmoji = () => {
  if (scorePercentage === 100)
   return <SentimentVerySatisfiedIcon color="success" fontSize="large" />;
  if (scorePercentage >= 75)
   return <SentimentSatisfiedIcon color="success" fontSize="large" />;
  if (scorePercentage >= 50)
   return <SentimentDissatisfiedIcon color="warning" fontSize="large" />;
  return <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />;
 };

 return (
  <Box
   sx={{
    p: 4,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    marginY: 4,
    borderRadius: 4,
   }}
  >
   <Typography variant="h4" gutterBottom>
    Quiz Completed!
   </Typography>
   <Typography variant="h5">
    Your Score: {correctAnswers} / {quizes.length} | {score}🌟
   </Typography>
   <Box sx={{ mt: 2 }}>{getEmoji()}</Box>
   <List>
    {quizes.map((quiz, index) => {
     const isCorrect = quiz.correct_answer === userQuizData[index];
     return (
      <ListItem
       key={index}
       sx={{
        border: 1,
        borderRadius: 2,
        mb: 2,
        borderColor: isCorrect ? "green" : "red",
       }}
      >
       <ListItemIcon>
        {isCorrect ? (
         <CheckCircleOutlineIcon color="success" />
        ) : (
         <CancelOutlinedIcon color="error" />
        )}
       </ListItemIcon>
       <ListItemText
        primary={`Q${index + 1}: ${quiz.question}`}
        secondary={`Your Answer: ${
         userQuizData[index] || "No answer"
        } | Correct Answer: ${quiz.correct_answer}`}
        sx={{ color: isCorrect ? "green" : "red" }}
       />
      </ListItem>
     );
    })}
   </List>
   <Button variant="text" size="large" onClick={() => navigate("/")}>
    ↩️
   </Button>
  </Box>
 );
};

export default QuizResult;
