import React, { useEffect, useState } from "react";
import JoinComp from "../Components/JoinComp";
import logo2 from "../assets/logo2.png";
import img from "../assets/3.jpg";
import { truncateText } from "../Functions/HelperFuncs";
import { TbArrowRight } from "react-icons/tb";
import quizTypes from "../JSON/quizTypes.json";
import Foooter from "../Components/Foooter";
import { FaBars } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Input, TextField } from "@mui/material";

function QuizPage() {
  const [types, setTypes] = useState();
  const navigate = useNavigate();
  const [hasBounced, setHasBounced] = useState(false);
  const [showBounce, setShowBounce] = useState(true);
  const [show, setShow] = useState(true);
  const location = useLocation();
  const [showan, setshowan] = useState(false);
  const { state: item } = location;

  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(10px)",
  });
  useEffect(() => {
    if (showBounce) {
      setTimeout(() => {
        setShowBounce(false);
      }, 3000);
    }
  }, [showBounce]);

  useEffect(() => {
    setshowan(true);
    const fetchTypes = async () => {
      try {
        setTypes(quizTypes.quizTypes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, []);

  return (
    <div className="flex flex-col">
      {<JoinComp />}

      <div className="flex sm:flex-row sm:flex-wrap w-full flex-wrap h-fit justify-around gap-10 bg-gradient-to-t from-white to-blue-200 rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg my-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
        <div className={`${show ? "animate-slide-from-left" : ""}`}>
          <img
            src={img}
            className="w-28 h-28 sm:w-32 md:w-36 lg:w-40 sm:h-32 md:h-36 lg:h-40 rounded-lg"
          />
        </div>
        <div className="flex-wrap">
          <p className="text-app-bg font-semibold text-2xl text-wrap">
            {JSON.stringify(item).replace(/"/g, "")}
          </p>
          <p className="text-pinkish font-normal hover:text-pink-900 text-wrap">
            {JSON.stringify(item).replace(/"/g, "")} Quizzes
          </p>
          <div className="flex flex-wrap flex-row gap-2 items-center">
            <button
              className="text-wrap text-blue-500 hover:text-blue-600 transition-colors"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
            <TbArrowRight className="text-sm" color="black" />
            <button
              className="text-wrap text-blue-500 hover:text-blue-600 transition-colors"
              onClick={() => {
                navigate("/QuizPage", { state: item });
              }}
            >
              {truncateText(`${JSON.stringify(item).replace(/"/g, "")}`, 9)}
            </button>
            <TbArrowRight className="text-sm" color="black" />
          </div>
        </div>
        <div className={`${show ? "animate-slide-from-right" : ""}`}>
          <img
            src={logo2}
            className="w-28 h-28 sm:w-32 md:w-36 lg:w-40 sm:h-32 md:h-36 lg:h-40"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-start mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2 gap-5">
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <div>
            <div
              className={`${
                show ? "animate-slide-from-left" : ""
              } bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
            >
              What's Up?
            </div>
            <div className="flex flex-row items-center gap-1 mt-1">
              <p>2416</p>
              <button className="text-blue-600 hover:text-blue-900">
                players
              </button>
              <p>playing</p>
            </div>
            <div className="flex flex-row items-center gap-1 mt-1">
              <button className="text-blue-600 hover:text-blue-900">
                Activity Feed
              </button>
            </div>
          </div>
          <div>
            <div
              className={`${
                show ? "animate-slide-from-left" : ""
              } bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
            >
              Categories
            </div>
            <div className="flex flex-wrap flex-col gap-1 mt-1">
              <p>Multi-Choice</p>
              <p>True/False</p>
            </div>
          </div>
          <div>
            <div
              className={`${
                show ? "animate-slide-from-left" : ""
              } flex flex-row justify-between items-center bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
            >
              All Travia Topics
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                <FaBars className="text-2xl block sm:hidden lg:hidden md:hidden" />
              </button>
            </div>
            {show && (
              <animated.div
                style={props}
                className="flex flex-col items-start gap-1 mt-1 transition-all"
              >
                {Array.isArray(types) &&
                  types.map((item, index) => (
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      key={index}
                      onClick={() => {
                        navigate("/QuizPage", { state: item });
                      }}
                    >
                      {truncateText(Object.values(item), 23)}
                    </button>
                  ))}
              </animated.div>
            )}
          </div>
        </div>
        <div className="flex-1 w-full flex-col">
          <div>
            <div
              className={`${
                show ? "animate-slide-from-right" : ""
              } bg-blue-200 font-bold text-lg rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1`}
            >
              Set Up a quiz now!
            </div>
            <div
              className={`${
                showBounce ? "animate-slide-from-left" : ""
              } text-app-bg font-bold my-3 text-center text-2xl text-wrap`}
              onAnimationEnd={() => setHasBounced(true)}
            >
              {JSON.stringify(item).replace(/"/g, "")}
            </div>
            <Box
              className="flex flex-col flex-wrap mt-2"
              component={"form"}
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const inputs = {
                  number_of_qs: data.get("number"),
                  difficulty: data.get("difficulty"),
                  type: data.get("type"),
                };
                inputs.number_of_qs
                  ? navigate("/QuizMulti", { state: item })
                  : alert("Please enter number of questions");
              }}
            >
              <strong className="text-black mb-2 text-wrap">
                Number of questions
              </strong>
              <input
                type="number"
                max={15}
                min={5}
                name="number"
                placeholder="Number of questions"
                className="border-2 border-gray-400 rounded-lg p-2 text-wrap focus:shadow-sm focus:outline-none focus:border-blue-600 mb-2"
              />
              <strong className="text-black mb-2 text-wrap">
                Select difficulty
              </strong>
              <select
                className="flex flex-wrap border-2 border-gray-400 max-w-full bg-white rounded-lg p-2 text-wrap focus:shadow-sm focus:outline-none focus:border-blue-600 mb-2"
                name="difficulty"
                id="difficulty"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <strong className="text-black mb-2 text-wrap">Select Type</strong>
              <select
                className="flex flex-wrap border-2 border-gray-400 max-w-full bg-white rounded-lg p-2 text-wrap focus:shadow-sm focus:outline-none focus:border-blue-600 mb-2"
                name="type"
                id="type"
              >
                <option value="Multi-choice">Multi-choice</option>
                <option value="True/False">true/false</option>
              </select>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg p-2 my-3 text-wrap font-medium text-lg hover:bg-blue-600 transition-colors"
              >
                Start Quiz
              </button>
            </Box>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-center justify-center mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2">
        {<Foooter />}
      </div>
    </div>
  );
}

export default QuizPage;
