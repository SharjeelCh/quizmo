import React, { useState } from "react";
import ProgressBar from "../Components/ProgressBar";
import { Button, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import Alert from "@mui/material/Alert";
import "../App.css";
import { useLocation } from "react-router-dom";
import { findingCorrectAnswer, scoreLogic } from "../Functions/QuizLogic";

export const QuizTrue_False = () => {
 const [showAlert, setShowAlert] = useState(false);
 const [showSuccessAlert, setShowSuccessAlert] = useState(false);
 const [userQuizData, setuserQuizData] = useState({});
 const [loading, setLoading] = useState(false);
 const location = useLocation();
 const { state: item } = location;
 console.log(item);

 const quizes = {
  1: {
   question: "The Earth is flat.",
   answer: "False",
  },
  2: {
   question: "Water boils at 100°C at sea level.",
   answer: "True",
  },
  3: {
   question: "The sun rises in the west.",
   answer: "False",
  },
  4: {
   question: "The human body has 206 bones.",
   answer: "True",
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
   <RadioGroup
    className="grid grid-cols-2"
    value={selectedOp}
    onChange={(e) => handleOptionChange(e.target.value)}
   >
    <FormControlLabel
     value="True"
     control={<Radio color="primary" />}
     label="True"
     className="justify-center items-center gap-x-3 border-2 border-gray-300 rounded-2xl p-4 mt-5 mr-5 text-wrap hover:bg-slate-300 transition-colors"
    />
    <FormControlLabel
     value="False"
     control={<Radio color="primary" />}
     label="False"
     className="justify-center items-center gap-x-3 border-2 border-gray-300 rounded-2xl p-4 mt-5 mr-5 text-wrap hover:bg-slate-300 transition-colors"
    />
   </RadioGroup>
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
