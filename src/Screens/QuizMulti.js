import React, { useEffect, useState } from "react";
import ProgressBar from "../Components/ProgressBar";
import { Button, FormControlLabel, Checkbox } from "@mui/material";
import Alert from "@mui/material/Alert";
import "../App.css";
import { useLocation } from "react-router-dom";
import { findingCorrectAnswer, scoreLogic } from "../Functions/QuizLogic";
import Quiz_Dialog from "../Components/Dialogg";

export const QuizMulti = () => {
 const [showAlert, setShowAlert] = useState(false);
 const [showSuccessAlert, setShowSuccessAlert] = useState(false);
 const [userQuizData, setuserQuizData] = useState({});
 const [loading, setLoading] = useState(false);
 const location = useLocation();
 const [permission, setPermission] = useState(true);
 const { state: item } = location;

 console.log(item);
 const quizes = {
  1: {
   question: "What is the capital of France?",
   options: ["Paris", "London", "Berlin", "Madrid"],
   answer: "Paris",
  },
  2: {
   question: "What is the capital of Spain?",
   options: ["Paris", "London", "America", "Paros"],
   answer: "Madrid",
  },
  3: {
   question: "What is the capital of Germany?",
   options: ["Paris", "London", "Berlin", "Madrid"],
   answer: "Berlin",
  },
  4: {
   question: "What is the capital of Italy?",
   options: ["Rome", "London", "Berlin", "Madrid"],
   answer: "Rome",
  },
 };

 const [increase, setIncrease] = useState(false);
 const [current, setCurrent] = useState(1);
 const [selectedOp, setSelectedOp] = useState("");

 const Alertt = ({ text, severity }) => {
  return (
   <Alert severity={severity} className="text-center" variant="outlined">
    {text}
   </Alert>
  );
 };

 //if (permission) {
 // return <Quiz_Dialog />;
 //}

 if (loading) {
  return <h1>Loading...</h1>;
 }

 const handleQuiz = () => {
  if (selectedOp === "") {
   setShowAlert(true);
   return;
  }
  setIncrease(true);
  if (current < Object.keys(quizes).length) {
   setCurrent(current + 1);
   setSelectedOp("");
   setShowAlert(false);
  } else {
   setShowSuccessAlert(true);
   setLoading(true);
   scoreLogic(
    item.difficulty,
    Object.keys(quizes).length,
    findingCorrectAnswer(quizes, userQuizData)
   );
   setLoading(false);
  }
 };

 const handleOptionChange = (option) => {
  setSelectedOp(option);
  setuserQuizData({ ...userQuizData, [current]: option });
 };

 return (
  <div className="flex flex-col justify-evenly px-4 bg-white h-dvh">
   {showAlert && (
    <Alertt text={"Please choose an option!"} severity={"error"} />
   )}
   {showSuccessAlert && (
    <Alertt text={"Quiz completed successfully!"} severity={"success"} />
   )}
   <ProgressBar
    totalQs={Object.keys(quizes).length}
    increase={increase}
    setincrease={setIncrease}
   />
   <section className="flex flex-row flex-wrap items-center">
    <strong className="font-bold text-2xl text-wrap">Question {current}</strong>
    <strong className="flex flex-wrap font-semibold text-base">
     /{Object.keys(quizes).length}
    </strong>
   </section>
   <div className="border-dashed border-2 border-blue-300"></div>
   <h1 className="font-serif text-lg sm:text-2xl md:2xl lg:3xl xl:3xl">
    {quizes[current].question}
   </h1>
   <div className="grid grid-cols-2" id="griid">
    {quizes[current].options.map((option, key) => {
     return (
      <FormControlLabel
       key={key}
       control={
        <Checkbox
         checked={selectedOp === option}
         onChange={() => handleOptionChange(option)}
         color="primary"
        />
       }
       label={option}
       className="justify-center items-center gap-x-3 border-2 border-gray-300 rounded-2xl p-4 mt-5 mr-5 text-wrap hover:bg-slate-300 transition-colors"
      />
     );
    })}
   </div>
   <Button
    onClick={handleQuiz}
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2, py: 1.5 }}
   >
    {current === Object.keys(quizes).length ? "Submit" : "Next"}
   </Button>
  </div>
 );
};
