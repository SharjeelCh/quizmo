import React, { useState } from "react";
import ProgressBar from "../Components/ProgressBar";
import { Button, FormControlLabel } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import "../App.css";
import Quiz_Dialog from "../Components/Dialog";
export const QuizMulti = () => {
 const quizes = {
  1: {
   question: "What is the capital of France?",
   options: ["Paris", "London", "Berlin", "Madrid"],
   answer: "Paris",
  },
  2: {
   question: "What is the capital of Spain?",
   options: ["Paris", "London", "america", "Paros"],
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
 const [Increase, setincrease] = useState(false);
 const [current, setCurrent] = useState(1);
 const [selectedOp, setSelectedOp] = useState("");
 const handleQuiz = () => {
  setincrease(true);
  if (current < Object.keys(quizes).length) {
   setCurrent(current + 1);
  } else {
   setTimeout(() => {
    alert("Quiz Completed");
   }, 200);
  }
 };
 return (
  <div className="flex flex-col justify-evenly px-4 bg-white h-dvh">
   <ProgressBar
    totalQs={Object.keys(quizes).length}
    increase={Increase}
    setincrease={setincrease}
   />
   <section className="flex flex-row flex-wrap items-center">
    <strong className=" font-bold text-2xl text-wrap">
     Question {current}
    </strong>
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
       control={<CheckBox value="agree" color="primary" />}
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
    {current == Object.keys(quizes).length ? "Submit" : "Next"}
   </Button>
  </div>
 );
};
