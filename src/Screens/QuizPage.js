import React, { useEffect, useState } from "react";
import JoinComp from "../Components/JoinComp";
import logo2 from "../assets/logo2.png";
import img from "../assets/3.jpg";
import { truncateText } from "../Functions/HelperFuncs";
import { TbArrowRight } from "react-icons/tb";
import quizTypes from "../JSON/quizTypes.json";

function QuizPage() {
  const [types, setTypes] = useState();

  useEffect(() => {
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
        <img
          src={img}
          className="w-28 h-28 sm:w-32 md:w-36 lg:w-40 sm:h-32 md:h-36 lg:h-40"
        />
        <div className="flex-wrap">
          <p className="text-app-bg font-semibold text-2xl text-wrap">
            General Knowledge Trivia
          </p>
          <p className="text-pinkish font-normal hover:text-pink-900 text-wrap">
            General Knowledge Trivia Quizzes
          </p>
          <div className="flex flex-wrap flex-row gap-2 items-center">
            <button className="text-wrap text-blue-500 hover:text-blue-600 transition-colors">
              Home
            </button>
            <TbArrowRight className="text-sm" color="black" />
            <button className="text-wrap text-blue-500 hover:text-blue-600 transition-colors">
              {truncateText("generalknowledge", 6)}
            </button>
            <TbArrowRight className="text-sm" color="black" />
          </div>
        </div>
        <img
          src={logo2}
          className="w-28 h-28 sm:w-32 md:w-36 lg:w-40 sm:h-32 md:h-36 lg:h-40"
        />
      </div>

      <div className="flex flex-col sm:flex-row h-fit sm:h-fit md:h-fit lg:h-fit bg-white rounded-md sm:rounded-sm md:rounded-md lg:rounded-lg items-start mt-2 sm:mt-3 md:mt-3 lg:mt-3 p-1 sm:p-2 md:p-2 gap-5">
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <div>
            <div className="bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1">
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
            <div className="bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1">
              Categories
            </div>
            <div className="flex flex-wrap flex-col gap-1 mt-1">
              <p>Multi-Choice</p>
              <p>True/False</p>
            </div>
          </div>
          <div>
            <div className="bg-blue-300 font-bold text-lg w-full sm:w-52 rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1">
              All Travia Topics
            </div>
            <div className="flex flex-col items-start gap-1 mt-1">
              {Array.isArray(types) &&
                types.map((item, index) => (
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    key={index}
                  >
                    {truncateText(Object.values(item), 23)}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex-col">
          <div>
            <div className="bg-blue-200 font-bold text-lg rounded-t-md sm:rounded-t-md md:rounded-t-lg px-2 py-1">
              !
            </div>
            <div className="flex flex-row items-start gap-1 mt-1 flex-wrap">
              <p className="whitespace-nowrap text-lg">Adventure through the</p>
              <p className="whitespace-nowrap font-bold text-lg">
                Realms of Knowledge
              </p>
              <p className="whitespace-normal flex-grow text-lg">
                with - and against - thousands of other players from around the
                world! Answer questions, play games, join teams, and climb the
                ranks!
              </p>
              <p className="font-bold text-lg">FOR FREE!</p>
              <p className="text-lg"> Become a</p>
              <button className="text-blue-600 hover:text-blue-900 text-lg">
                {" "}
                Gold Member
              </button>
              <p className="text-lg">
                for an ad-free experience and tons of perks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
