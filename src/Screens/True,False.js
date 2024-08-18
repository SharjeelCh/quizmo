import React, { useEffect, useState } from "react";
import ProgressBar from "../Components/ProgressBar";
import { Button, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import Alert from "@mui/material/Alert";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { findingCorrectAnswer, scoreLogic } from "../Functions/QuizLogic";
import Quiz_Dialog from "../Components/Dialogg";
import axios from "axios";

export const QuizTrue_False = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [userQuizData, setuserQuizData] = useState({});
  const [quizType, setQuizType] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [permission, setPermission] = useState(true);
  const [hide, setHide] = useState(false);
  const { state: item } = location;

  useEffect(() => {
    setQuizType(item.type === "Multi-choice" ? "multiple" : "boolean");
  }, [item]);

  const [quizes, setQuizes] = useState([]);
  const [increase, setIncrease] = useState(false);
  const [current, setCurrent] = useState(0); // Set to 0 for consistency
  const [selectedOp, setSelectedOp] = useState("");

  const Alertt = ({ text, severity }) => {
    return (
      <Alert severity={severity} className="text-center" variant="outlined">
        {text}
      </Alert>
    );
  };

  useEffect(() => {
    if (!quizType) return;
    axios
      .get(
        `https://opentdb.com/api.php?amount=${item.number_of_qs}&category=9&difficulty=${item.difficulty}&type=${quizType}`
      )
      .then((response) => {
        const fetchedQuizzes = response.data.results.map((quiz) => {
          const options = [...quiz.incorrect_answers, quiz.correct_answer].sort(
            () => Math.random() - 0.5
          );
          return { ...quiz, options };
        });
        setQuizes(fetchedQuizzes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setShowAlert(true);
        setLoading(false);
      });
  }, [quizType, hide]);

  if (permission && !hide) {
    return <Quiz_Dialog hide={setHide} />;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleQuiz = () => {
    if (selectedOp === "") {
      setShowAlert(true);
      return;
    }

    setuserQuizData((prevData) => ({
      ...prevData,
      [current]: selectedOp,
    }));

    if (current < quizes.length - 1) {
      setIncrease(true);
      setCurrent(current + 1);
      setSelectedOp("");
      setShowAlert(false);
    } else {
      setShowSuccessAlert(true);
      setLoading(true);

      const score = scoreLogic(
        item.difficulty,
        quizes.length,
        findingCorrectAnswer(quizes, {
          ...userQuizData,
          [current]: selectedOp,
        })
      );

      navigate("/QuizResult", {
        state: {
          quizes,
          userQuizData: { ...userQuizData, [current]: selectedOp },
          score,
        },
      });
      setLoading(false);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOp(option);
    setuserQuizData({
      ...userQuizData,
      [current]: option,
      quizType: item.quiz_type,
      difficulty: item.difficulty,
      type: item.type,
    });
  };

  return (
    <div className="flex flex-col justify-evenly px-4 bg-white h-dvh">
      {showAlert && <Alertt text={"Please choose an option!"} severity={"error"} />}
      {showSuccessAlert && (
        <Alertt text={"Quiz completed successfully!"} severity={"success"} />
      )}
      <ProgressBar
        totalQs={quizes.length}
        increase={increase}
        setincrease={setIncrease}
      />
      <section className="flex flex-row flex-wrap items-center">
        <strong className="font-bold text-2xl text-wrap">
          Question {current + 1}
        </strong>
        <strong className="flex flex-wrap font-semibold text-base">
          /{item.number_of_qs}
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
        {current === quizes.length - 1 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};
